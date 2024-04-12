/**
 * Streamers
 */
insert into auth.users
  (instance_id, id, aud, role, email, encrypted_password, raw_app_meta_data, raw_user_meta_data, email_confirmed_at, created_at)
values
  ('00000000-0000-0000-0000-000000000000', '185f2f83-d63a-4c9b-b4a0-7e4a885799e2', 'authenticated', 'authenticated', 'streamer1@email.com', '$2a$10$6gPtvpqCAiwavx1EOnjIgOykKMgzRdiBuejUQGIRRjvUi/ZgMh.9C', '{"provider":"email","providers":["email"]}', '{"name": "ゲテモノピロ毛1", "is_streamer": true}', timezone('utc'::text, now()), timezone('utc'::text, now())),
  ('00000000-0000-0000-0000-000000000001', '185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'authenticated', 'authenticated', 'streamer2@email.com', '$2a$10$6gPtvpqCAiwavx1EOnjIgOykKMgzRdiBuejUQGIRRjvUi/ZgMh.9C', '{"provider":"email","providers":["email"]}', '{"name": "ゲテモノピロ毛2", "is_streamer": true}', timezone('utc'::text, now()), timezone('utc'::text, now())),
  ('00000000-0000-0000-0000-000000000002', '185f2f83-d63a-4c9b-b4a0-7e4a885799e4', 'authenticated', 'authenticated', 'streamer3@email.com', '$2a$10$6gPtvpqCAiwavx1EOnjIgOykKMgzRdiBuejUQGIRRjvUi/ZgMh.9C', '{"provider":"email","providers":["email"]}', '{"name": "ゲテモノピロ毛3", "is_streamer": true}', timezone('utc'::text, now()), timezone('utc'::text, now())),
  ('00000000-0000-0000-0000-000000000003', '185f2f83-d63a-4c9b-b4a0-7e4a885799e5', 'authenticated', 'authenticated', 'streamer4@email.com', '$2a$10$6gPtvpqCAiwavx1EOnjIgOykKMgzRdiBuejUQGIRRjvUi/ZgMh.9C', '{"provider":"email","providers":["email"]}', '{"name": "ゲテモノピロ毛4", "is_streamer": true}', timezone('utc'::text, now()), timezone('utc'::text, now())),
  ('00000000-0000-0000-0000-000000000004', '185f2f83-d63a-4c9b-b4a0-7e4a885799e6', 'authenticated', 'authenticated', 'streamer5@email.com', '$2a$10$6gPtvpqCAiwavx1EOnjIgOykKMgzRdiBuejUQGIRRjvUi/ZgMh.9C', '{"provider":"email","providers":["email"]}', '{"name": "ゲテモノピロ毛5", "is_streamer": true}', timezone('utc'::text, now()), timezone('utc'::text, now())),
  ('00000000-0000-0000-0000-000000000005', '185f2f83-d63a-4c9b-b4a0-7e4a885799e7', 'authenticated', 'authenticated', 'streamer6@email.com', '$2a$10$6gPtvpqCAiwavx1EOnjIgOykKMgzRdiBuejUQGIRRjvUi/ZgMh.9C', '{"provider":"email","providers":["email"]}', '{"name": "ゲテモノピロ毛6", "is_streamer": true}', timezone('utc'::text, now()), timezone('utc'::text, now())),
  ('00000000-0000-0000-0000-000000000006', '185f2f83-d63a-4c9b-b4a0-7e4a885799e8', 'authenticated', 'authenticated', 'streamer7@email.com', '$2a$10$6gPtvpqCAiwavx1EOnjIgOykKMgzRdiBuejUQGIRRjvUi/ZgMh.9C', '{"provider":"email","providers":["email"]}', '{"name": "ゲテモノピロ毛7", "is_streamer": true}', timezone('utc'::text, now()), timezone('utc'::text, now())),
  ('00000000-0000-0000-0000-000000000007', '185f2f83-d63a-4c9b-b4a0-7e4a885799e9', 'authenticated', 'authenticated', 'streamer8@email.com', '$2a$10$6gPtvpqCAiwavx1EOnjIgOykKMgzRdiBuejUQGIRRjvUi/ZgMh.9C', '{"provider":"email","providers":["email"]}', '{"name": "ゲテモノピロ毛8", "is_streamer": true}', timezone('utc'::text, now()), timezone('utc'::text, now())),
  ('00000000-0000-0000-0000-000000000008', '185f2f83-d63a-4c9b-b4a0-7e4a885799e0', 'authenticated', 'authenticated', 'streamer9@email.com', '$2a$10$6gPtvpqCAiwavx1EOnjIgOykKMgzRdiBuejUQGIRRjvUi/ZgMh.9C', '{"provider":"email","providers":["email"]}', '{"name": "ゲテモノピロ毛9", "is_streamer": true}', timezone('utc'::text, now()), timezone('utc'::text, now())),
  ('00000000-0000-0000-0000-000000000009', '185f2f83-d63a-4c9b-b4a0-7e4a885799e1', 'authenticated', 'authenticated', 'streamer10@email.com', '$2a$10$6gPtvpqCAiwavx1EOnjIgOykKMgzRdiBuejUQGIRRjvUi/ZgMh.9C', '{"provider":"email","providers":["email"]}', '{"name": "ゲテモノピロ毛10", "is_streamer": true}', timezone('utc'::text, now()), timezone('utc'::text, now()));

update public.streamers
set profile = '一緒に遊びましょう！一緒に遊びましょう！一緒に遊びましょう！一緒に遊びましょう！一緒に遊びましょう！一緒に遊びましょう！一緒に遊びましょう！一緒に遊びましょう！一緒に遊びましょう！一緒に遊びましょう！一緒に遊びましょう！一緒に遊びましょう';

update public.streamers
set x_url = 'https://localhost:3000/';

update public.streamers
set twitch_url = 'https://localhost:3000/';

update public.streamers
set youtube_url = 'https://localhost:3000/';

/**
 * Games
 */
insert into public.games
  (name, description, created_at, updated_at)
values
  ('Apex Legends', '一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!', NOW(), NOW()),
  ('Call Of Duty', '一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!', NOW(), NOW()),
  ('モンスターハンター', '一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!', NOW(), NOW()),
  ('Factorio', '一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!', NOW(), NOW()),
  ('スプラトゥーン', '一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!', NOW(), NOW()),
  ('Battle Flelds', '一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!', NOW(), NOW()),
  ('Battle Flelds2', '一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!', NOW(), NOW()),
  ('Battle Flelds3', '一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!', NOW(), NOW()),
  ('Battle Flelds4', '一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!', NOW(), NOW()),
  ('Battle Flelds5', '一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!一緒に遊びましょう!', NOW(), NOW());

/**
 * Plans
 */
insert into public.plans
  (name, description, amount, stripe_product_id, stripe_price_id, stripe_payment_link_id, created_at, updated_at, streamer_id, game_id)
values
  ('一緒に遊べるプラン1', '一緒に遊べます一緒に遊べます一緒に遊べます一緒に遊べます一緒に遊べます', 3000, '12345', '12345', '12345', NOW(), NOW(), '185f2f83-d63a-4c9b-b4a0-7e4a885799e2', 1),
  ('一緒に遊べるプラン2', '一緒に遊べます一緒に遊べます一緒に遊べます一緒に遊べます一緒に遊べます', 2000, '12341', '12341', '12341', NOW(), NOW(), '185f2f83-d63a-4c9b-b4a0-7e4a885799e2', 2),
  ('一緒に遊べるプラン3', '一緒に遊べます一緒に遊べます一緒に遊べます一緒に遊べます一緒に遊べます', 5000, '12342', '12342', '12342', NOW(), NOW(), '185f2f83-d63a-4c9b-b4a0-7e4a885799e2', 2),
  ('一緒に遊べるプラン4', '一緒に遊べます一緒に遊べます一緒に遊べます一緒に遊べます一緒に遊べます', 3000, '12343', '12343', '12343', NOW(), NOW(), '185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 1),
  ('一緒に遊べるプラン5', '一緒に遊べます一緒に遊べます一緒に遊べます一緒に遊べます一緒に遊べます', 2000, '12344', '12344', '12344', NOW(), NOW(), '185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 2);

/**
 * Users
 */
insert into auth.users
  (instance_id, id, aud, role, email, encrypted_password, raw_app_meta_data, raw_user_meta_data, email_confirmed_at, created_at)
values
  ('00000000-0000-0000-0000-000000000000', '285f2f83-d63a-4c9b-b4a0-7e4a885799e2', 'authenticated', 'authenticated', 'user@email.com', '$2a$10$6gPtvpqCAiwavx1EOnjIgOykKMgzRdiBuejUQGIRRjvUi/ZgMh.9C', '{"provider":"email","providers":["email"]}', '{"name": "ツーシーム投げ猫", "is_streamer": false}', timezone('utc'::text, now()), timezone('utc'::text, now()));

/**
 * Reviews
 */
insert into public.reviews
  (rating, comment, created_at, streamer_id, user_id, plan_id)
values
  (5, '楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった', NOW(), '185f2f83-d63a-4c9b-b4a0-7e4a885799e2', '285f2f83-d63a-4c9b-b4a0-7e4a885799e2', 1),
  (2, '楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった', NOW(), '185f2f83-d63a-4c9b-b4a0-7e4a885799e2', '285f2f83-d63a-4c9b-b4a0-7e4a885799e2', 2),
  (4, '楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった', NOW(), '185f2f83-d63a-4c9b-b4a0-7e4a885799e2', '285f2f83-d63a-4c9b-b4a0-7e4a885799e2', 3),
  (5, '楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった', NOW(), '185f2f83-d63a-4c9b-b4a0-7e4a885799e3', '285f2f83-d63a-4c9b-b4a0-7e4a885799e2', 4),
  (1, '楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった楽しかった', NOW(), '185f2f83-d63a-4c9b-b4a0-7e4a885799e3', '285f2f83-d63a-4c9b-b4a0-7e4a885799e2', 5);

/**
 * AvailableDateTimes
 */
insert into public.available_date_times
  (start_date_time, created_at, updated_at, streamer_id)
values
  ('2023-04-12 10:00:00', NOW(), NOW(), '185f2f83-d63a-4c9b-b4a0-7e4a885799e2'),
  ('2023-04-12 11:00:00', NOW(), NOW(), '185f2f83-d63a-4c9b-b4a0-7e4a885799e2'),
  ('2023-04-12 12:00:00', NOW(), NOW(), '185f2f83-d63a-4c9b-b4a0-7e4a885799e2'),
  ('2023-04-12 19:00:00', NOW(), NOW(), '185f2f83-d63a-4c9b-b4a0-7e4a885799e2'),
  ('2023-04-13 10:00:00', NOW(), NOW(), '185f2f83-d63a-4c9b-b4a0-7e4a885799e2'),
  ('2023-04-13 13:00:00', NOW(), NOW(), '185f2f83-d63a-4c9b-b4a0-7e4a885799e2'),
  ('2023-04-13 19:00:00', NOW(), NOW(), '185f2f83-d63a-4c9b-b4a0-7e4a885799e2');
