CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  icon_url VARCHAR(255),
  profile VARCHAR(255),
  is_admin BOOLEAN NOT NULL DEFAULT FALSE,
  is_streamer BOOLEAN NOT NULL DEFAULT FALSE,
  stripe_account_id VARCHAR(255) UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL
);

CREATE TABLE games (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  icon_url VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL
);

CREATE TABLE plans (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  amount INTEGER NOT NULL,
  stripe_product_id VARCHAR(255) NOT NULL,
  stripe_price_id VARCHAR(255) NOT NULL,
  stripe_payment_link_id VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL,
  user_id BIGINT NOT NULL REFERENCES users(id),
  game_id BIGINT NOT NULL REFERENCES games(id)
);

CREATE TABLE reservations (
  id BIGSERIAL PRIMARY KEY,
  start_date_dime TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date_time TIMESTAMP WITH TIME ZONE NOT NULL,
  is_available BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL,
  streamer_id BIGINT NOT NULL REFERENCES users(id),
  user_id BIGINT NOT NULL REFERENCES users(id),
  plan_id BIGINT NOT NULL REFERENCES plans(id)
);

CREATE TABLE available_date_times (
  id BIGSERIAL PRIMARY KEY,
  start_date_time TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL,
  user_id BIGINT NOT NULL REFERENCES users(id),
  reservation_id BIGINT REFERENCES reservations(id)
);
