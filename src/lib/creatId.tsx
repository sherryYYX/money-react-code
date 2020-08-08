let id = parseInt(window.localStorage.getItem('idMax') || '0');

const createId = ()=>{
  id += 1
  window.localStorage.setItem('maxId', JSON.stringify(id))
  return id
}
export {createId}