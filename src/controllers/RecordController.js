
class RecordController {
  add(list, item) {
    let newList = [...list];
    newList.unshift(item);
    return newList;
  }
  update(list, item) {
    let newList = [...list];
    let record = newList.findIndex((each) => each.id === item.id);
    newList[record] = item;
    return newList;
  }
  delete(list, item) {
    let newList = [...list];
    let record = newList.findIndex((each) => each.id === item);
    newList.splice(record, 1);
    return newList;
  }
}
export default new RecordController();