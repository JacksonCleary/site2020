const ArrayFunctions = {
    graphQLGroupByNestedFrontMatter: function(objectArray, property) {
      let newArr = objectArray.reduce(function (acc, obj) {
        let id = obj.node.id
        let content = obj.node.frontmatter[property]
        if (!acc) {
          acc = []
        }
        acc[id] = content
        return acc
      }, [])
      return newArr
    },
    graphQLGroupByHTML: function(objectArray, property) {
      let newArr = objectArray.reduce(function(acc, obj){
        let id = obj.node.id
        let content = obj.node[property]
        if (!acc) {
          acc = []
        }
        acc[id] = content
        return acc
      }, [])
      return newArr
    }
}

export default ArrayFunctions