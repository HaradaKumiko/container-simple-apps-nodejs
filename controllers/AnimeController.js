import AnimeModel from "../models/animeModel.js";
import { ResponseFormatter } from "../helpers/ResponseFormatter.js";


export class AnimeController{
    async getAllAnime(req, res){
        try {
            const page = parseInt(req.query.page) || 1; 
            const limit = 10; 
            const searchQuery = req.query['q'] || '';

            if(searchQuery){            
                const query = 
                {
                    $or: [
                        { "anime": { $regex: new RegExp(searchQuery, 'i') } },
                    ]
                };

                const totalItems = await AnimeModel.countDocuments(query);
                const totalPages = Math.ceil(totalItems / limit);

                const animes = await AnimeModel.find(query)      
                .skip((page - 1) * limit) 
                .limit(limit); 

    
                if (animes.length != 0){
                    const response = {
                        currentPage: page,
                        totalPages,
                        totalItems,
                        itemsPerPage: limit,
    
                  };
                return res.status(200).json(ResponseFormatter(true, "Data Semua Anime", response, animes));
                }else{
                    return res.status(404).json(ResponseFormatter(false, "Anime Tidak Ditemukan, Harap Lebih Spesifik Kata Pencarian Yang Anda Gunakan, Silahkan Coba Berdasarkan Nama Anime", null, null));
                }

            }else {
            const totalItems = await AnimeModel.countDocuments();
        
            const totalPages = Math.ceil(totalItems / limit);

            const animes = await AnimeModel.find()      
            .skip((page - 1) * limit) 
            .limit(limit); 

            if (animes.length != 0){
                const response = {
                    currentPage: page,
                    totalPages,
                    totalItems,
                    itemsPerPage: limit,

              };
            return res.status(200).json(ResponseFormatter(true, "Data Semua Anime", response, animes));
            }else{
            return res.status(404).json(ResponseFormatter(false, "Anime Tidak Ditemukan", null, null));
            }
        }
            } catch (error) {
            return res.status(400).json(ResponseFormatter(false, error.message, null, null));
        }
    }

    async addAnime(req, res){
        try {
            let anime = new AnimeModel({
                anime: req.body.anime.toUpperCase()
            });
            anime = await anime.save();
           return res.status(201).json(ResponseFormatter(true, "Berhasil Menambahkan Anime Baru", null, anime));
        } catch (error) {
            return res.status(400).json(ResponseFormatter(false, error.message,null, null));
        }
    }

    async getAnimeById(req, res){
        try {
            const anime = await AnimeModel.findById({_id: req.params.id});
            if(!anime){
                return res.status(404).json(ResponseFormatter(false, "Anime Tidak Ditemukan", null, null));
            }else{
                return res.status(200).json(ResponseFormatter(true, "Data Anime", null, anime));
            }
        } catch (error) {
            return res.status(400).json(ResponseFormatter(false, error.message,null, null));
        }
    }

    async editAnime(req, res){
        try {
            let anime = await AnimeModel.findById({_id: req.params.id});
            if(!anime){
                return res.status(404).json(ResponseFormatter(false, "Anime Tidak Ditemukan", null, null));
            }else{
                anime.anime = req.body.anime.toUpperCase();
                anime = await anime.save()
                return res.status(200).json(ResponseFormatter(true, "Berhasil Mengubah Data Anime", null, anime));
            }
        } catch (error) {
            return res.status(400).json(ResponseFormatter(false, error.message, null, null))
        }
    }

    async deleteAnime(req, res){
        try {
            let anime = await AnimeModel.findById({_id: req.params.id});
            if(!anime){
                return res.status(404).json(ResponseFormatter(false, "Anime Tidak Ditemukan", null, null));
            }else{
                anime = await anime.deleteOne();
                return res.status(200).json(ResponseFormatter(false, "Berhasil Menghapus Anime", null, null));
            }
        } catch (error) {
            return res.status(400).json(ResponseFormatter(false, error.message, null, null));
        }
    }

    
}