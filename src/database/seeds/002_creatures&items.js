
import { randomUUID } from 'node:crypto';

const CREATURES = [
    { name: 'Blue Cat', creaturetype: 'blue' },
    { name: 'Red Cat', creaturetype: 'red' },
    { name: 'Green Cat', creaturetype: 'green' },
];

const ITEMS = [
    { name: 'Candy', itemtype: 'consumable' },
    { name: 'Cheese', itemtype: 'consumable' },
    { name: 'Toy', itemtype: 'consumable' },
];

/**
 * @param {import('knex').Knex} knex
 */
export async function seed(knex) {
    const users = await knex('users').select('id');

    for (const user of users) {
        const creatures = CREATURES.map((creature) => ({
            id: randomUUID(),
            user_id: user.id,
            ...creature,
        }));

        const items = ITEMS.map((item) => ({
            id: randomUUID(),
            user_id: user.id,
            ...item,
        }));

        await knex('creatures')
            .insert(creatures)
            .onConflict(['user_id', 'name'])
            .ignore();

        await knex('inventory')
            .insert(items)
            .onConflict(['user_id', 'name'])
            .ignore();
    }
}
