const middleware = (bot) => {
  bot.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log('Response time: %sms', ms);
  });

  //   bot.use((ctx, next) => {
  //     ctx.state.role = getUserRole(ctx.message);
  //     return next();
  //   });
};

module.exports = middleware;
