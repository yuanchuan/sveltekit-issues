import preprocess from "svelte-preprocess";

export default {

  // not working since next.146, next.145 works fine.
  preprocess: [
    preprocess({
      babel: {
        plugins: [
          ["@babel/plugin-proposal-pipeline-operator", { "proposal": "fsharp" }]
        ]
      }
    })
  ],

  kit: {
    target: '#svelte'
  }
};
