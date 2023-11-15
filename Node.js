import { sql } from "@vercel/postgres";
import express from 'express';
import multer from 'multer';
import cors from 'cors';
import { Server } from 'http';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const server = new Server(app);


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, 'client/build')));



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.use(express.json());

app.post('/ajouter-element', upload.single('image'), async (req, res) => {
  const { pseudo, contenu } = req.body;
  const image = req.file;

  try {
    await sql`
      INSERT INTO elements_enquete (pseudo, contenu, image)
      VALUES (${pseudo}, ${contenu}, ${image.buffer})
    `;
    console.log('Élément ajouté avec succès dans la base de données.');
    res.json({ message: 'Élément ajouté avec succès !' });
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'élément dans la base de données : ', error);
    res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'élément dans la base de données.' });
  }
});

app.get('/liste-elements', async (req, res) => {
  try {
    const results = await sql`
      SELECT id, pseudo, contenu, date_creation, image FROM elements_enquete
    `;

    const organizedResults = results.reduce((acc, element) => {
      const existingElement = acc.find((accElement) => accElement.id === element.id);
      if (existingElement) {
        existingElement.comments.push({
          pseudo: element.comment_pseudo,
          commentaire: element.commentaire,
        });
      } else {
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
  } catch (error) {
    console.error('Erreur lors de la récupération des éléments dans la base de données : ', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des éléments dans la base de données.' });
  }
});

server.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
