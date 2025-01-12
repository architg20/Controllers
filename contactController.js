exports.getContactUs = (req, res, next) => {
    res.render('contact');
  };
  
  exports.postContactUs = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    console.log(`Received contact form from: ${name}, ${email}`);
    res.redirect('/success');
  };
  