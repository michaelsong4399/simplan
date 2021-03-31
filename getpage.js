(async function () {
    await loadDependencies("materials", ["all"]);
})();

(async function () {
    response = fetchApi(`sections/2832086427/assignments/3363759523`);
    Logger.log(response);
})();
