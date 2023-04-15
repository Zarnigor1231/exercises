process.on("message", (son) => {
  const result = sevimliMi((son));

  process.send(result);

  process.exit();
})

function sevimliMi(son) {
  let count = 0
  let count1 = 0
  let sevimli = son
  // let length = sevimli.length

  for (let i = 2; i < son; i++) {
    if (son % i === 0) {
      count++
    }

    if (count > 0) {
      return {
        sevimliMi: false,
      }
    } else {
      for (let i = 2; i < sevimli; i++) {
        if (sevimli % i === 0) {
          count1++
        }
        if (count1 > 0) {
          return {
            sevimliMi: false,
          }
        }else if(sevimli > 10) {
            sevimli = (sevimli + "").slice(0, (sevimli + "").length - 1)
            console.log("bu" , sevimli)
          }
      }
      // console.log("bu" , sevimli)
    }

    return {
      sevimliMi: true,
      sevimli: sevimli

    }
  }
}
  // `node child-processes/http-server.js`