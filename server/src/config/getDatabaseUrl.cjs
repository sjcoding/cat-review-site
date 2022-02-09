const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/cat-review-site_development",
      test: "postgres://postgres:postgres@localhost:5432/cat-review-site_test",
      e2e: "postgres://postgres:postgres@localhost:5432/cat-review-site_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
