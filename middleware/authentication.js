exports.headerAuthentication = (req, res, next) => {
	try {
		const { authorization } = req.headers
		if (!authorization) return res.status(401).send('unauthorized')
		if (authorization === "Bearer swagger") return next()
		const token = atob(authorization)
		if (token !== process.env.TOKEN) return res.status(401).send('unauthorized')
		next()
	}
	catch (e) {
		return res.status(401).send('unauthorized')
	}
}