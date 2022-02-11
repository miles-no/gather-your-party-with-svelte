/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * This file contains API endpoints for getting all characters and adding new characters.
 */

import type { RequestHandler } from '@sveltejs/kit';

const PORTRAITS = [
	// Dwarves
	'https://cdna.artstation.com/p/assets/images/images/036/610/402/large/marco-fornaciari-dwarf-new.jpg?1618149584',
	'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b63b02bb-720c-4892-8a88-04572d2836f5/d8adaem-840df505-ad3d-4faf-81f6-bbc6504d12ee.jpg/v1/fill/w_1024,h_1466,q_75,strp/ragnhild_by_mischeviouslittleelf_d8adaem-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ2NiIsInBhdGgiOiJcL2ZcL2I2M2IwMmJiLTcyMGMtNDg5Mi04YTg4LTA0NTcyZDI4MzZmNVwvZDhhZGFlbS04NDBkZjUwNS1hZDNkLTRmYWYtODFmNi1iYmM2NTA0ZDEyZWUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.X59TWxeetr8c3ye6ZphI6-stfH5wE-3VsW3lMlF7Jco',
	// Elves
	'https://cg4.cgsociety.org/uploads/images/medium/etch0-elf-portrait-1-3a2e1dd4-on7h.jpg',
	'https://i.imgur.com/XHupYIb.jpeg',
	// Gnomes
	'https://i.pinimg.com/474x/ab/12/bf/ab12bfb08cd428ec89fbf1f27c404440.jpg',
	'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40ef33d5-282d-4c99-80e8-a38a2b78f192/d9ef7ag-f9965037-a108-44f8-a5c9-1b93046504cd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQwZWYzM2Q1LTI4MmQtNGM5OS04MGU4LWEzOGEyYjc4ZjE5MlwvZDllZjdhZy1mOTk2NTAzNy1hMTA4LTQ0ZjgtYTVjOS0xYjkzMDQ2NTA0Y2QuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7ncgq6ZVABWkPMve1IcHH9qbH2wKi5_1YN2CV3kpT0U',
	// Humans
	'https://i.pinimg.com/originals/c7/f7/b2/c7f7b2e00646a1a1e1f625ec504e0530.jpg',
	'https://i.pinimg.com/236x/95/b6/44/95b644fea0a6e2c3ca301360addf1f42.jpg',
	// Orcs
	'https://i.pinimg.com/736x/c5/6f/8e/c56f8e2cd2a12cf41b2ba9f5917804c4.jpg',
	'https://i.pinimg.com/564x/17/b4/35/17b4351230ebf16b15a0f528eaa07c1d.jpg',
	// Barbarian
	'https://i.pinimg.com/564x/82/8e/65/828e651e63e6c21761c65def550b6d94.jpg',
	// Bard
	'https://i.pinimg.com/originals/b0/65/a7/b065a7c713c7ade695641abeace0736f.png',
	// Cleric
	'https://pbs.twimg.com/media/EzwR1z8XoAk_-sa.jpg',
	// Druid
	'https://i.imgur.com/WWQbBdg.png',
	// Fighter
	'https://i.pinimg.com/736x/a9/a4/b2/a9a4b23987c24beec8684363c6d3a7ba.jpg',
	// Monk
	'https://i.pinimg.com/originals/f6/9f/db/f69fdb0eee98dedc14dd1861ddde3a31.jpg',
	// Paladin
	'https://cdna.artstation.com/p/assets/images/images/030/787/544/large/timothy-kong-wip-2.jpg?1601647705',
	// Ranger
	'https://live.staticflickr.com/3245/3102922301_cdda251b5f_w.jpg',
	// Rogue
	'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c83ed766-4504-45cb-83a0-2dcb66ae62e1/dcsghgn-acd56f80-d723-489e-bfe1-a3cc010c38fe.jpg/v1/crop/w_263,h_350,x_0,y_0,scl_0.29222222222222,q_70,strp/rogue_by_nataliebernard_dcsghgn-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcL2M4M2VkNzY2LTQ1MDQtNDVjYi04M2EwLTJkY2I2NmFlNjJlMVwvZGNzZ2hnbi1hY2Q1NmY4MC1kNzIzLTQ4OWUtYmZlMS1hM2NjMDEwYzM4ZmUuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.YWkvwQDpG8BfT63a7Q2MawqSjHwQ1xuAQn_n-mlJRso',
	// Sorcerer
	'https://i.pinimg.com/736x/37/e2/ed/37e2edb065f31a56ef1992881aa9e6f3.jpg',
	// Warlock
	'https://i.pinimg.com/originals/b1/92/64/b19264229ed35c6037cffa5ce78a1a0a.jpg',
	// Wizard
	'https://i.pinimg.com/originals/7f/1a/92/7f1a92e891adf5a1ea44d06a0205f37f.jpg',
	// Extra
	'https://i.pinimg.com/originals/e0/b7/c9/e0b7c96b5368d394c5443fd7872eca53.png',
	'https://i.pinimg.com/736x/73/91/5d/73915dff281f949fcf3c2e4c5a037806.jpg',
];

// GET /api/portraits
export const get: RequestHandler = async () => {
	return { body: PORTRAITS };
};
