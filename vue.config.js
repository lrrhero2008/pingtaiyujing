// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/pingtaiyujing/'
//     : '/'
// }
module.exports = {
  devServer: {
    proxy: {
      '/papi': {
        target: 'https://bdkjv.g2ma.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}