import { getPayloadInstance, initializePayload } from '../lib/payload-client';

export async function load() {
	await initializePayload();
	const payloadInstance = await getPayloadInstance();
	const user = await payloadInstance.findByID({
		collection: 'users',
		id: '1'
	});

	return { msg: 'welcome', user: user };
}
