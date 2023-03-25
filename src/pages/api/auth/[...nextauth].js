import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";

const options = {
    providers: [
        GitHubProvider({
            clientId: "01b5e3d55475c1ae680c",
            clientSecret: "eef55906f2c61921d750fb8c7be3d9a58b0c6a88"
        }),
    ],
}

export default (req, res) => NextAuth(req, res, options)
