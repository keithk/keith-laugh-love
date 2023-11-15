import Fastify from "fastify";

const fastify = Fastify({ logger: true });

// Respond to .well-known/atproto-did
fastify.get("/.well-known/atproto-did", async (request, reply) => {
  return { did: "plc:t3ehyucfy7ofylu4spnivvmb" };
});

// Serve an HTML page at the root
fastify.get("/", async (request, reply) => {
  reply.type("text/html").send("<h1>keith. laugh. love.</h1>");
});

// Start the server
const start = async () => {
  try {
    const port = process.env.PORT || 3000;
    await fastify.listen({ port });
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
