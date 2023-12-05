import { Router } from "express";

const router = Router();

/*
router.get("/:word([a-zA-Z]+)", async (req, res) => {
  res.send(req.params.word);

});*/

/*
router.get("/:word([a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)", async (req, res) => {
  res.send(req.params.word);

});
router.put("/:word([a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)", async (req, res) => {
  res.send(req.params.word);

});

router.delete("/:word([a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)", async (req, res) => {
  res.send(req.params.word);

});

router.post("/:word([a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)", async (req, res) => {
  res.send(req.params.word);

});

router.get("/:word([a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)/:parametro([a-z])", async (req, res) => {
  //res.send(req.params.word);
  res.send(`${req.params.word} con parametro ${req.params.parametro}`)

});
*/

const palabras =[ "Hola","Chao","Adios"]

router.param('word',async(req,res,next,word)=>{
  const buscarPalabra =palabras.find(buscarPalabra =>req.params.word === buscarPalabra)

  if(!buscarPalabra){
    res.status(404).send('URL No Valida')
  }
  req.word = buscarPalabra
  next();
})

router.get('/:word',async(req,res)=>{
  res.send(req.word)
})

const validarURL =(req,res,next)=>{
  const {word} = req.params;

  if(/^[a-z]+$/.test(word)){
    next()
  }else{
    res.status(404).send('URL No Valida')
  }
}

router.get('/:word',validarURL,async(req,res)=>{
  res.send(req.word)
})

router.get("*", async (req, res) => {
  res.status(404).send('URL No Valida')

});


export default router;