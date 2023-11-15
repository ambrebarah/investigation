const express = require('express');
const mysql = require('mysql2');
const multer = require('multer');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const port = 3000;
const path = require('path');

app.use(cors());
const server = http.createServer(app);
const io = socketIO(server);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'kenji',
  password: 'kenjikun',
  database: 'kenji'
});

app.use(express.static(path.join(__dirname, 'client/build')));

const chatRoom = io.of('/chat-room');  // Créer une instance de chat-room

chatRoom.on('connection', (socket) => {
  console.log('Nouvelle connexion WebSocket');

  socket.on('join', (pseudo) => {
    console.log(`${pseudo} a rejoint le chat-room`);
    socket.join('Quelles sont vos hypothèses?');  // Rejoindre la room
    chatRoom.to('Quelles sont vos hypothèses?').emit('message', { pseudo: 'System', text: `${pseudo} a rejoint le chat` });
  });

  socket.on('sendMessage', (message) => {
    chatRoom.to('Quelles sont vos hypothèses?').emit('message', { pseudo: message.pseudo, text: message.text });
  });

  socket.on('disconnect', () => {
    console.log('Déconnexion WebSocket');
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.use(express.json());

app.post('/ajouter-element', upload.single('image'), (req, res) => {
  const { pseudo, contenu } = req.body;
  const image = req.file;

  const ajoutElementQuery = 'INSERT INTO elements_enquete (pseudo, contenu, image) VALUES (?, ?, ?)';

  connection.query(ajoutElementQuery, [pseudo, contenu, image.buffer], (error, results) => {
    if (error) {
      console.error('Erreur lors de l\'ajout de l\'élément dans la base de données : ', error);
      res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'élément dans la base de données.' });
    } else {
      console.log('Élément ajouté avec succès dans la base de données.');
      res.json({ message: 'Élément ajouté avec succès !' });
    }
  });
});

app.get('/liste-elements', (req, res) => {
  const query = 'SELECT id, pseudo, contenu, date_creation, image FROM elements_enquete';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Erreur lors de la récupération des éléments dans la base de données : ', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des éléments dans la base de données.' });
    } else {
      // Organisez les résultats pour les rendre plus faciles à traiter dans le composant React
      const organizedResults = results.reduce((acc, element) => {
        const existingElement = acc.find((accElement) => accElement.id === element.id);
        if (existingElement) {
          // L'élément existe déjà, ajoutez simplement le commentaire
          existingElement.comments.push({
            pseudo: element.comment_pseudo,
            commentaire: element.commentaire,
          });
        } else {
          // Créez un nouvel élément avec son commentaire
          const newElement = {
            id: element.id,
            pseudo: element.pseudo,
            contenu: element.contenu,
            date_creation: element.date_creation,
            image: element.image ? element.image.toString('base64') : null,
            comments: [
              {
                pseudo: element.comment_pseudo,
                commentaire: element.commentaire,
              },
            ],
          };
          acc.push(newElement);
        }
        return acc;
      }, []);

      res.json(organizedResults);
    }
  });
});




app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
