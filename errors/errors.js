const middlewareError = (req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Rota nãoo encontrada'
    });
};

module.exports = middlewareError;

