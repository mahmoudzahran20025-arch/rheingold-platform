export interface Env {
    CONTACT_MESSAGES: KVNamespace;
    CORS_ORIGIN: string;
}

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        // Handle CORS
        if (request.method === "OPTIONS") {
            return new Response(null, {
                headers: {
                    "Access-Control-Allow-Origin": env.CORS_ORIGIN || "*",
                    "Access-Control-Allow-Methods": "POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type",
                },
            });
        }

        // Only allow POST requests to /contact
        const url = new URL(request.url);
        if (request.method === "POST" && url.pathname === "/contact") {
            try {
                const body = await request.json() as any;
                const { name, email, phone, company, subject, message } = body;

                // Validation
                if (!name || !email || !message) {
                    return new Response(JSON.stringify({ error: "Missing required fields" }), {
                        status: 400,
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": env.CORS_ORIGIN || "*",
                        },
                    });
                }

                // Store in KV (simulating database for now)
                const id = crypto.randomUUID();
                const timestamp = new Date().toISOString();
                await env.CONTACT_MESSAGES.put(
                    `msg:${id}`,
                    JSON.stringify({
                        id,
                        timestamp,
                        name,
                        email,
                        phone,
                        company,
                        subject,
                        message,
                        status: 'new'
                    })
                );

                return new Response(JSON.stringify({ success: true, id }), {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": env.CORS_ORIGIN || "*",
                    },
                });

            } catch (err) {
                return new Response(JSON.stringify({ error: "Invalid JSON" }), {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": env.CORS_ORIGIN || "*",
                    },
                });
            }
        }

        return new Response("Not Found", { status: 404 });
    },
};
