import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "NEWS_API_KEY is not configured" },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=keuangan&apiKey=${apiKey}`,
      { next: { revalidate: 3600 } },
    );

    if (!res.ok) {
      throw new Error(`NewsAPI                                                                                                                                                                                      responded with ${res.status}`);
    }

    const data = await res.json();

    const articles = data.articles.map(
      (article: {
        title: string;
        description: string;
        url: string;
        urlToImage: string | null;
      }) => ({
        title: article.title,
        description: article.description,
        url: article.url,
        image: article.urlToImage,
      }),
    );

    return NextResponse.json({ articles });
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 },
    );
  }
}
