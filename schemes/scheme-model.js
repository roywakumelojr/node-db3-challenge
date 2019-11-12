const db = require('../data/dbConfig')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
    .where({ id }).first();
}

function findSteps(id) {
    return db("steps as S")
    .join("schemes as sc", "sc.id", "=", "S.scheme_id")
    .where({ scheme_id: id })
    .select("S.id", "sc.scheme_name", "S.step_number", "S.instructions");
}

function add(schemes) {
    return db("schemes")
    .insert(schemes);          
}

function update(changes, id) {
    return db("schemes")
    .update(changes)
    .where({ id });      
}

function remove(id) {
    return db("schemes")
    .delete()
    .where({ id });      
}