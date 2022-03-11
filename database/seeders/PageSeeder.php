<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Pages array
        $pages = [
            [
                'key' => 'home'
            ],
            [
                'key' => 'choose_apartment'
            ],
            [
                'key' => 'about'
            ],

            [
                'key' => 'service'
            ],
            [
                'key' => 'gallery'
            ],
            [
                'key' => 'contact'
            ],
            [
                'key' => 'choose_floor'
            ]


        ];

        // Insert Pages
        Page::insert($pages);
    }
}
