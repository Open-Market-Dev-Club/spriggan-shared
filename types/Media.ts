export type NftMetadataResponse = {
	format: string;
	name: string;
	description: string;
	sensitive_content: boolean;
	collection: {
		name: string;
		id: string;
		attributes: [
			{
				type: string;
				value: string;
			}
		];
	};
	attributes: [
		{
			trait_type: string;
			value: string;
		}
	];
	minting_tool: string;
};

export type NftMetadataParsed = {
	isMediaNFT: boolean;
	mediaType: string;
	productId: string;
	productName: string;
	datastoreId: string;
	edition: string;
	attributes: [
		{
			type: string;
			value: string;
		}
	];
	traits: [
		{
			trait_type: string;
			value: string;
		}
	];
};

export const parseNftMetadata = (resp: NftMetadataResponse): NftMetadataParsed => {
	let datastoreId = '';
	let isMediaNFT = false;
	let edition = 'Standard';

	console.log(resp);

	resp.collection.attributes.forEach((element: { type: string; value: string }) => {
		if (element.type === 'datastore id') {
			datastoreId = element.value;
			isMediaNFT = true;
		}
	});

	resp.attributes.forEach((element: { trait_type: string; value: string }) => {
		if (element.trait_type === 'Edition') {
			edition = element.value;
		}
	});

	// TODO: replace with updated metadata format
	return {
		isMediaNFT,
		mediaType: 'game',
		productId: resp.collection.id,
		productName: resp.collection.name,
		datastoreId,
		edition,
		attributes: resp.collection.attributes,
		traits: resp.attributes,
	};
};

export type Media = {
	mediaType: string;
	adultTags: string[];
	banner: string;
	businessEmail: string;
	capsuleImage: string;
	contentRating: string;
	description: string;
	creator: string;
	discord: string;
	executables: string;
	facebook: string;
	icon: string;
	instagram: string;
	lastUpdated: number;
	lastUpdatedContent: number;
	longDescription: string;
	password: string;
	paymentAddress: string;
	productId: string;
	publisher: string;
	publisherDid: string;
	screenshots: string[];
	shortDescription: string;
	status: string;
	supportEmail: string;
	tags: string[];
	title: string;
	torrents: string;
	trailer: string;
	trailerSource: string;
	twitter: string;
	version: string;
	website: string;
};
