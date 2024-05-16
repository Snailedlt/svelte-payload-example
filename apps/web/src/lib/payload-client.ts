// payload-client.ts
import { type BasePayload, getPayload, type GeneratedTypes } from 'payload';
import { importConfig } from 'payload/node';
import 'dotenv/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

let payloadInstance: BasePayload<GeneratedTypes>;

export async function initializePayload() {
	const __dirname = path.dirname(fileURLToPath(import.meta.url));
	let payloadConfigPathPrefix = '';
	if (import.meta.env.PROD) {
		payloadConfigPathPrefix = '../../../';
	}
	const payloadConfigPath = path.join(
		__dirname,
		`${payloadConfigPathPrefix}../../../cms/src/payload.config.ts`
	);
	console.log('payloadConfigPath', payloadConfigPath);
	const awaitedConfig = await importConfig(payloadConfigPath);

	payloadInstance = await getPayload({ config: awaitedConfig });
}

export async function getPayloadInstance() {
	if (!payloadInstance) {
		throw new Error('Payload has not been initialized. Call initializePayload first.');
	}

	return payloadInstance;
}
