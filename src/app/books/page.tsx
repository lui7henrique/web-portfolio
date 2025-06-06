import { BlurFade } from "@/components/magicui/blur-fade";
import notion from "@/services/notion";
import type {
	Book,
	NotionDatabaseQueryResponse,
	NotionPage,
} from "@/types/notion";

function extractTextFromRichText(
	richText: Array<{ plain_text?: string; text?: { content: string } }>,
) {
	return richText
		.map((item) => item.plain_text || item.text?.content || "")
		.join("");
}

function processNotionPageToBook(page: NotionPage): Book {
	const { properties } = page;

	return {
		id: page.id,
		name: extractTextFromRichText(properties.Name.title),
		author: extractTextFromRichText(properties.Autor.rich_text),
		status: properties.Status.status?.name || null,
		image: extractTextFromRichText(properties.Image.rich_text),
		portfolio: properties.Portfólio.checkbox,
		url: page.url,
		createdTime: page.created_time,
		lastEditedTime: page.last_edited_time,
	};
}

export default async function Books() {
	const response = (await notion.databases.query({
		database_id: process.env.NOTION_PAGE_ID as string,
	})) as NotionDatabaseQueryResponse;

	const books: Book[] = response.results.map((page) => {
		return processNotionPageToBook(page);
	});

	const portfolioBooks = books.filter((book) => book.portfolio === true);

	return (
		<>
			<BlurFade delay={0.6}>
				<blockquote className="border-l-4 border-gray-300 pl-4 italic text-muted-foreground mt-4 mb-6">
					"A book is proof that humans are capable of working magic.
					<br />
					We look at symbols on a page and hear voices in our heads."
					<footer className="text-sm mt-2">— Carl Sagan</footer>
				</blockquote>
			</BlurFade>

			<div className="grid grid-cols-3 gap-4">
				{portfolioBooks.map((book, index) => (
					<BlurFade key={book.id} delay={0.8 + index * 0.3}>
						<div className="border rounded-sm overflow-hidden">
							{book.image && (
								<div className="aspect-[263/408]">
									<img
										src={book.image}
										alt={book.name}
										className="w-full h-full object-cover"
									/>
								</div>
							)}
						</div>
					</BlurFade>
				))}
			</div>
		</>
	);
}
