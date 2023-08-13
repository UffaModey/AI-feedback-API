export default async function Resolver(root){
  let instruction: string = "Give feedback on this blog post: ";
  const { post } = root

  if (!post) return null

  return fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: instruction + post,
      max_tokens: 200,
      temperature: 0.7
    })
  })
    .then(res => res.json())
}