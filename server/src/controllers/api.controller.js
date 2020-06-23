class ApiController {
    constructor(service) {
        this._service = service;
        this.get = this.get.bind(this);
        this.list = this.list.bind(this);
        this.update = this.update.bind(this);
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    }

    async get(req, res) {
        try {
            var data = await this._service.get(req.params.id);
            
            if (data != null) {
                return res.status(200).json(data);
            }
            
            return res.status(400).json({message: 'Not found'});
        } catch(e) {
            return res.status(400).json({message: e.message});
        }
    }

    async list(req, res) {
        try {
            var data = await this._service.list();
            return res.status(200).json(data);
        } catch(e) {
            return res.status(400).json({message: e.message});
        }
    }

    async create(req, res) {
        try {
            var data = await this._service.create(req.body);
            return res.status(200).json(data);
        } catch(e) {
            return res.status(400).json({message: e.message});
        }
    }

    async update(req, res) {
        try {
            var data = await this._service.update(req.params.id, req.body);
            return res.status(200).json(data);
        } catch(e) {
            return res.status(400).json({message: e.message});
        }
    }

    async remove(req, res) {
        try {
            await this._service.remove(req.params.id);
            return res.status(200).end();
        } catch(e) {
            return res.status(400).json({message: e.message});
        }
    }
}

module.exports = ApiController;