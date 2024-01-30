const parseEnv = () => {
  let string = "";
  const envs = process.env;
  Object.keys(envs).forEach((key) => {
    if (key.match(/^RSS_/)) {
      string += `${key}=${envs[key]};`;
    }
  });

  console.log(string.slice(0, string.length - 1));
};

parseEnv();
