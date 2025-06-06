export interface NotionUser {
	object: "user";
	id: string;
}

export interface NotionParent {
	type: "database_id";
	database_id: string;
}

export interface NotionRichText {
	id: string;
	type: "rich_text";
	rich_text: Array<{
		type: string;
		text?: {
			content: string;
			link?: string | null;
		};
		annotations?: {
			bold: boolean;
			italic: boolean;
			strikethrough: boolean;
			underline: boolean;
			code: boolean;
			color: string;
		};
		plain_text?: string;
		href?: string | null;
	}>;
}

export interface NotionTitle {
	id: string;
	type: "title";
	title: Array<{
		type: string;
		text: {
			content: string;
			link?: string | null;
		};
		annotations: {
			bold: boolean;
			italic: boolean;
			strikethrough: boolean;
			underline: boolean;
			code: boolean;
			color: string;
		};
		plain_text: string;
		href?: string | null;
	}>;
}

export interface NotionStatus {
	id: string;
	type: "status";
	status: {
		id: string;
		name: string;
		color: string;
	} | null;
}

export interface NotionCheckbox {
	id: string;
	type: "checkbox";
	checkbox: boolean;
}

export interface NotionProperties {
	Portfólio: NotionCheckbox;
	Autor: NotionRichText;
	Text: NotionRichText;
	Status: NotionStatus;
	Image: NotionRichText;
	Name: NotionTitle;
}

export interface NotionPage {
	object: "page";
	id: string;
	created_time: string;
	last_edited_time: string;
	created_by: NotionUser;
	last_edited_by: NotionUser;
	cover: string | null;
	icon: string | null;
	parent: NotionParent;
	archived: boolean;
	in_trash: boolean;
	properties: NotionProperties;
	url: string;
	public_url: string | null;
}

export interface NotionDatabaseQueryResponse {
	object: "list";
	results: NotionPage[];
	next_cursor: string | null;
	has_more: boolean;
	type: "page_or_database";
	page_or_database: Record<string, never>;
}

export interface Book {
	id: string;
	name: string;
	author: string;
	status: string | null;
	image: string;
	portfolio: boolean;
	url: string;
	createdTime: string;
	lastEditedTime: string;
}
