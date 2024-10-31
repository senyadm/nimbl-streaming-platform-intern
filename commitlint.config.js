import conventional from '@commitlint/config-conventional';

export default {
    extends: [conventional],
    rules: {
        'type-enum': [2, 'always', [
            'feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'build', 'ci'
        ]]
    }
};