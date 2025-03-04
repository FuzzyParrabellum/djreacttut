const apiService = {
  get: async function (url: string): Promise<any> {
    console.log("get", url);

    return new Promise((resolve, reject) => {
      // ci-dessous ${process.env.NEXT_PUBLIC_API_HOST permet de récupérer
      // la variable d'environnement correspondante à partir je suppose de
      // notre fichier d'env
      fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}${url}`,
        // ensuite on écrit la méthode que l'on va use
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((json) => {
          console.log("Response:", json);

          resolve(json);
        })
        .catch((error) => {
          // Ici au lieu d'utiliser res, on utilise reject pour push
          // directement l'erreur ds la property list d'après le prof
          reject(error);
        });
    });
  },
  // on met data:any parce qu'on veut faire en sorte que ce soit possible
  // de post de la json data ET de la form data
  // async function(url: string, data: any): Promise<any> veut dire qu'on veut
  // se voir retourner une promesse de n'importe quel type
  post: async function (url: string, data: any): Promise<any> {
    console.log("post", url, data);

    return new Promise((resolve, reject) => {
      fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}${url}`,
        // ensuite on écrit la méthode que l'on va use
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((json) => {
          console.log("Response:", json);

          resolve(json);
        })
        .catch((error) => {
          // Ici au lieu d'utiliser res, on utilise reject pour push
          // directement l'erreur ds la property list d'après le prof
          reject(error);
        });
    });
  },
};

export default apiService;
