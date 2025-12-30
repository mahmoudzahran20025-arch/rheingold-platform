
// Mock Seed Data for Initial KV Population (Can be run once via a script or admin button)
import { products } from '@/data/products'
import { createProduct } from '@/lib/api'

export async function seedProducts(adminSecret: string) {
    console.log(`Seeding ${products.length} products...`);
    for (const p of products) {
        await createProduct(p, adminSecret);
        console.log(`Seeded: ${p.name}`);
    }
    console.log('Seeding complete.');
}
