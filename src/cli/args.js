const parseArgs = () => {
  const joinedtext = process.argv
    .map((item, index) => {
      if (item.match(/^--/)) {
        return `${item.replace(/^--/, "")} is ${process.argv[index + 1]}`;
      }
    })
    .filter((item) => item)
    .join(", ");

  console.log(joinedtext);
};

parseArgs();
