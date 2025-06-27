import {consulta} from '../database/conexao.js';

class SelecaoRepository {

    create(data) {
        const query = 'INSERT INTO selecoes (nome, sigla) VALUES (?, ?)';
        return consulta(query, data, 'Não foi possivel criar a seleção');
    }

    findAll() {
        const query = 'SELECT * FROM selecoes';
        return consulta(query, [], 'Não foi possivel localizar');
    }

    findById(id) {
        const query = 'SELECT * FROM selecoes WHERE id = ?';
        return consulta(query, [id], 'Seleção não encontrada');
    }

    update(id, data) {
        const query = 'UPDATE selecoes SET nome = ?, sigla = ? WHERE id = ?';
        return consulta(query, [...data, id], 'Não foi possivel atualizar a seleção');
    }

    delete(id) {
        const query = 'DELETE FROM selecoes WHERE id = ?';
        return consulta(query, [id], 'Não foi possivel deletar a seleção');
    }
}

export default new SelecaoRepository()