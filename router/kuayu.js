let cube
if (process.env.NODE_ENV === 'development') {
  cube = 'http://localhost:82'
} else {
  cube = 'http://p.lidty.com/pickpa/'
}

// let service_root = 'http://localhost:82'
export default cube
