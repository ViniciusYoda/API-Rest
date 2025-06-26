import conexao from '../database/conexao.js';

class SelecaoController {
    async index(req, res) {
        try {
        const selecao = await req.context.models.Selecao.findAll({
            include: [
            {
                model: req.context.models.Jogador,
                as: 'jogadores',
                attributes: ['id', 'nome', 'posicao']
            }
            ]
        });
        return res.status(200).json(selecao);
        } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar seleções' });
        }
    }
    
    async show(req, res) {
        try {
        const selecao = await req.context.models.Selecao.findByPk(req.params.id, {
            include: [
            {
                model: req.context.models.Jogador,
                as: 'jogadores',
                attributes: ['id', 'nome', 'posicao']
            }
            ]
        });
        if (!selecao) {
            return res.status(404).json({ error: 'Seleção não encontrada' });
        }
        return res.status(200).json(selecao);
        } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar seleção' });
        }
    }

    async store(req, res) {
        try {
        const selecao = await req.context.models.Selecao.create(req.body);
        return res.status(201).json(selecao);
        } catch (error) {
        return res.status(500).json({ error: 'Erro ao criar seleção' });
        }
    }

    async update(req, res) {
        try {
        const selecao = await req.context.models.Selecao.findByPk(req.params.id);
        if (!selecao) {
            return res.status(404).json({ error: 'Seleção não encontrada' });
        }
        await selecao.update(req.body);
        return res.status(200).json(selecao);
        } catch (error) {
        return res.status(500).json({ error: 'Erro ao atualizar seleção' });
        }
    }

    async delete(req, res) {
        try {
        const selecao = await req.context.models.Selecao.findByPk(req.params.id);
        if (!selecao) {
            return res.status(404).json({ error: 'Seleção não encontrada' });
        }
        await selecao.destroy();
        return res.status(204).send();
        } catch (error) {
        return res.status(500).json({ error: 'Erro ao excluir seleção' });
        }
    }
}

export default new SelecaoController()