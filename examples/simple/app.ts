// import axios from '@/index' //报错，Module not found: Error: Can't resolve '@/index' 
import axios from '../../src/index' 

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})
