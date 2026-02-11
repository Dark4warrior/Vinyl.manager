const authorize = (roles = []) => {
    return (req, res, next) => {
        const userRole = req.headers['x-user-role']; 

        if (!userRole) {
            return res.status(401).json({ message: "Authentification requise" });
        }

        if (roles.length && !roles.includes(userRole)) {
            return res.status(403).json({ message: "Accès refusé : privilèges insuffisants" });
        }

        next();
    };
};

module.exports = authorize;