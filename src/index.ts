import type { ASTVisitor, ValidationContext } from 'graphql';
import { GraphQLError } from 'graphql';

export const noIntrospection = (context: ValidationContext): ASTVisitor => {
  return {
    Field(node) {
      if (node.name.value === '__schema' || node.name.value === '__type') {
        context.reportError(
          new GraphQLError(
            'GraphQL introspection is not allowed, but the query contained __schema or __type',
            {
              nodes: [node],
            }
          )
        );
      }
    },
  };
};
