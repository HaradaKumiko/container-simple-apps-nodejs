import express from 'express';
import { AnimeController } from '../controllers/AnimeController.js';

var router = express.Router();
const animeController = new AnimeController();


router.get('/animes', function(req, res){
    animeController.getAllAnime(req, res);
});

router.post('/anime', function(req, res){
    animeController.addAnime(req,res);
});


router.get('/anime/:id', function(req, res){
    animeController.getAnimeById(req,res);
});

router.put('/anime/:id', function(req, res){
    animeController.editAnime(req,res);
});

router.delete('/anime/:id', function(req, res){
    animeController.deleteAnime(req,res);
});


export default router;
