const SUPABASE_URL = "https://hqeqdphnzxqfncklaqdd.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_vbmh3bdxAt2pcUT051A0sQ_5_U8eYcc";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

// ---------------------
// LOGIN PAGE
// ---------------------

const githubBtn = document.getElementById("githubLogin");

if (githubBtn) {

    githubBtn.addEventListener("click", async () => {

        await supabaseClient.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo:
                window.location.origin + "/dashboard.html"
            }
        });

    });

}

// ---------------------
// DASHBOARD PAGE
// ---------------------

async function loadUser() {

    const userContainer =
        document.getElementById("userData");

    if (!userContainer) return;

    const {
        data: { session }
    } = await supabaseClient.auth.getSession();

    if (!session) {
        window.location.href = "index.html";
        return;
    }

    const user = session.user;

    let avatar = "";
    let name = "";
    let email = "";

    if (user.user_metadata) {

        avatar =
            user.user_metadata.avatar_url || "";

        name =
            user.user_metadata.full_name ||
            user.user_metadata.user_name ||
            "";

        email = user.email || "";
    }

    userContainer.innerHTML = `
        <img src="${avatar}" class="avatar">

        <div class="user-info">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
        </div>
    `;
}

loadUser();

// ---------------------
// LOGOUT
// ---------------------

const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        async () => {

            await supabaseClient.auth.signOut();

            window.location.href =
                "index.html";
        }
    );

}
