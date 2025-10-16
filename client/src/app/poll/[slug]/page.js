// activity 3
export default function PollPage({ params }) {
    const slug = params.slug;
    return <h1>This poll's slug: {slug}</h1>;
}
