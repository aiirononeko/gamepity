create table public.reservations (
  id bigserial,
  start_date_dime timestamp with time zone not null,
  is_available boolean not null default false,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  streamer_id uuid not null references public.streamers(id),
  user_id uuid not null references auth.users(id),
  plan_id bigint not null references public.plans(id),
  review_id bigint references public.reviews(id),

  primary key (id)
);
