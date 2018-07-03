/*
 * #1
 * Напишите функцию, которая будет преобразовывать массив
 * со вложенными массивами в один плоский массив
 * EX:
 * in  : [1, [2, 3, [4, 5], [2, 4]], 3, [[2, [3, [1]], 4], [3]]]
 * out : [1, 2, 3, 4, 5, 2, 4, 3, 2, 3, 1, 4, 3]
*/

{
  function transform(arr) {
    const result = [];
    
    arr.forEach(element => {
      if (Array.isArray(element)) {
        r = transform(element);
      } else {
        r = element
        result.push(element);
      }
    });
    return result;
  }

  console.log(transform([1, [2, 3, [4, 5], [2, 4]], 3, [[2, [3, [1]], 4], [3]]]));
}

/*
 * #2
 * Напишите функцию, которая будет преобразовывать
 * ключи объекта в camelCase
 * EX 1:
 * in  : { user_name: 'shar', is_logged_in: true }
 * out : { userName: 'shar', isLoggedIn: true }
 *
 * EX 2:
 * in  : { 'user NAME': 'shar', TYPE: true }
 * out : { userName: 'shar', type: true }
*/

{
  function keyToCamelCase(obj) {
    const result = {};
    for (let key in obj) {
      let value = obj[key];
      let tmp = key + '';

      if (Array.isArray(obj[key]) && typeof obj[key] !== 'string') value = obj[key].map( (elem) => keyToCamelCase(elem) ); debugger;
      if (!Array.isArray(obj[key]) && typeof obj[key] === 'object') value = keyToCamelCase(obj[key]);

      

      if (tmp.indexOf('_') !== -1) tmp = tmp.split('_');
      if (tmp.indexOf(' ') !== -1) tmp = tmp.split(' ');

      if (Array.isArray(tmp)) {
        tmp = tmp.map( item => item[0].toUpperCase() + item.slice(1).toLowerCase() );
        tmp = tmp.join('');
      } else {
        tmp = tmp[0].toLowerCase() + tmp.slice(1).toLowerCase();
      }
      
      let newKey = tmp[0].toLowerCase() + tmp.slice(1);

      result[newKey] = value;
    }

    return result;
  }
  console.log(keyToCamelCase({ all_users: [{ user_name: 'shar', info: { full_description: '42' } }] }));
  console.log(keyToCamelCase({ 'user NAME': 'shar', TYPE: true }));
  console.log(keyToCamelCase({ user_name: 'shar', is_logged_in: true }));
}

/*
 * #3
 * Усовершенствуйте функцию из задания выше так,
 * чтобы она работала и для вложенных структур тоже
 * EX:
 * in  : { all-users: [{ user_name: 'shar', info: { full_description: '42' } }] }
 * out : { allUsers: [{ userName: 'shar', info: { fullDescription: '42' } }] }
 *
 * P.S. Постарайтесь переиспользовать общую логику
*/

{

}
