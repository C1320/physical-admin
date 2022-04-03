import Mock from 'mockjs'

const Random = Mock.Random

/**
 * 随机尿常规
 */
const randomNCG = () => {
  return Mock.mock({
    result1: Random.integer(0, 10),
    "result2|+1": ["-", "+"],
    "result3|+1": ["-", "+"],
    "result4|+1": ["弱阳性", "阳性"],
    "result5|+1": ["-", "+"],
    "result6|+1": ["-", "+"],
    "result7|+1": ["-", "+"],
    result8: Random.float(1, 2, 0, 3),
    result9: Random.float(1, 10, 0, 3),
    "result10|+1": ["-", "+"],
    "result11|+1": ["-", "+"],
  });
}
Mock.mock('/api/random-urine', randomNCG)
// 登录
Mock.mock('/api/login', 'post', (option) => {
  let {username, password} = JSON.parse(option.body)
  return (username === 'admin' && password === 'admin')
})

// 用户数据
const userData = () => {
  let users = []
  for (let i = 0; i < 10; i++) {
    let user = {
      'rid': Random.id(),
      'id': i + 1,
      'date': Random.date('yyyy-MM-dd'),
      'name': Random.cname(),
      'address': Mock.mock('@county(true)'),
      'phone': Mock.mock(/^1[0-9]{10}$/),
      'status': Random.integer(0, 1),
      'idCard': Random.id(),
      'uploadStatus': Random.integer(-1, 1),
      'doctorName': Random.cname(),
      'auditStatus': Random.integer(-1, 1),
      'examStatus': Random.integer(-1, 1),
      'remark': Random.cword(20),
      'org_name': Random.cword(10),
    }
    users.push(user)
  }
  return users
}
Mock.mock('/api/users', userData)

// 文章数据
const articleData = () => {
  let articles = []
  for (let i = 0; i < 20; i++) {
    let article = {
      'id': i + 1,
      'date': Random.date('yyyy-MM-dd'),
      'title': Random.csentence(),
      'author': Random.cname(),
      'content': Random.csentence(),
      'status': Random.integer(0, 1),
      'idCard': Random.id()
    }
    articles.push(article)
  }
  return articles
}
Mock.mock('/api/articles', articleData)
