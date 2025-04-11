
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Arma
 * 
 */
export type Arma = $Result.DefaultSelection<Prisma.$ArmaPayload>
/**
 * Model Fabricante
 * 
 */
export type Fabricante = $Result.DefaultSelection<Prisma.$FabricantePayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Teste
 * 
 */
export type Teste = $Result.DefaultSelection<Prisma.$TestePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Armas
 * const armas = await prisma.arma.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Armas
   * const armas = await prisma.arma.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.arma`: Exposes CRUD operations for the **Arma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Armas
    * const armas = await prisma.arma.findMany()
    * ```
    */
  get arma(): Prisma.ArmaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fabricante`: Exposes CRUD operations for the **Fabricante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fabricantes
    * const fabricantes = await prisma.fabricante.findMany()
    * ```
    */
  get fabricante(): Prisma.FabricanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teste`: Exposes CRUD operations for the **Teste** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testes
    * const testes = await prisma.teste.findMany()
    * ```
    */
  get teste(): Prisma.TesteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Arma: 'Arma',
    Fabricante: 'Fabricante',
    Cliente: 'Cliente',
    Teste: 'Teste'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "arma" | "fabricante" | "cliente" | "teste"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Arma: {
        payload: Prisma.$ArmaPayload<ExtArgs>
        fields: Prisma.ArmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmaPayload>
          }
          findFirst: {
            args: Prisma.ArmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmaPayload>
          }
          findMany: {
            args: Prisma.ArmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmaPayload>[]
          }
          create: {
            args: Prisma.ArmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmaPayload>
          }
          createMany: {
            args: Prisma.ArmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArmaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmaPayload>[]
          }
          delete: {
            args: Prisma.ArmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmaPayload>
          }
          update: {
            args: Prisma.ArmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmaPayload>
          }
          deleteMany: {
            args: Prisma.ArmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArmaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmaPayload>[]
          }
          upsert: {
            args: Prisma.ArmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmaPayload>
          }
          aggregate: {
            args: Prisma.ArmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArma>
          }
          groupBy: {
            args: Prisma.ArmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArmaCountArgs<ExtArgs>
            result: $Utils.Optional<ArmaCountAggregateOutputType> | number
          }
        }
      }
      Fabricante: {
        payload: Prisma.$FabricantePayload<ExtArgs>
        fields: Prisma.FabricanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FabricanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FabricanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>
          }
          findFirst: {
            args: Prisma.FabricanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FabricanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>
          }
          findMany: {
            args: Prisma.FabricanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>[]
          }
          create: {
            args: Prisma.FabricanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>
          }
          createMany: {
            args: Prisma.FabricanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FabricanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>[]
          }
          delete: {
            args: Prisma.FabricanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>
          }
          update: {
            args: Prisma.FabricanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>
          }
          deleteMany: {
            args: Prisma.FabricanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FabricanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FabricanteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>[]
          }
          upsert: {
            args: Prisma.FabricanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FabricantePayload>
          }
          aggregate: {
            args: Prisma.FabricanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFabricante>
          }
          groupBy: {
            args: Prisma.FabricanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FabricanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FabricanteCountArgs<ExtArgs>
            result: $Utils.Optional<FabricanteCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Teste: {
        payload: Prisma.$TestePayload<ExtArgs>
        fields: Prisma.TesteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TesteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TesteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          findFirst: {
            args: Prisma.TesteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TesteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          findMany: {
            args: Prisma.TesteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>[]
          }
          create: {
            args: Prisma.TesteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          createMany: {
            args: Prisma.TesteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TesteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>[]
          }
          delete: {
            args: Prisma.TesteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          update: {
            args: Prisma.TesteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          deleteMany: {
            args: Prisma.TesteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TesteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TesteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>[]
          }
          upsert: {
            args: Prisma.TesteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestePayload>
          }
          aggregate: {
            args: Prisma.TesteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeste>
          }
          groupBy: {
            args: Prisma.TesteGroupByArgs<ExtArgs>
            result: $Utils.Optional<TesteGroupByOutputType>[]
          }
          count: {
            args: Prisma.TesteCountArgs<ExtArgs>
            result: $Utils.Optional<TesteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    arma?: ArmaOmit
    fabricante?: FabricanteOmit
    cliente?: ClienteOmit
    teste?: TesteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ArmaCountOutputType
   */

  export type ArmaCountOutputType = {
    testes: number
  }

  export type ArmaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testes?: boolean | ArmaCountOutputTypeCountTestesArgs
  }

  // Custom InputTypes
  /**
   * ArmaCountOutputType without action
   */
  export type ArmaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmaCountOutputType
     */
    select?: ArmaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArmaCountOutputType without action
   */
  export type ArmaCountOutputTypeCountTestesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TesteWhereInput
  }


  /**
   * Count Type FabricanteCountOutputType
   */

  export type FabricanteCountOutputType = {
    arma: number
  }

  export type FabricanteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arma?: boolean | FabricanteCountOutputTypeCountArmaArgs
  }

  // Custom InputTypes
  /**
   * FabricanteCountOutputType without action
   */
  export type FabricanteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricanteCountOutputType
     */
    select?: FabricanteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FabricanteCountOutputType without action
   */
  export type FabricanteCountOutputTypeCountArmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArmaWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    testes: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testes?: boolean | ClienteCountOutputTypeCountTestesArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountTestesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TesteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Arma
   */

  export type AggregateArma = {
    _count: ArmaCountAggregateOutputType | null
    _avg: ArmaAvgAggregateOutputType | null
    _sum: ArmaSumAggregateOutputType | null
    _min: ArmaMinAggregateOutputType | null
    _max: ArmaMaxAggregateOutputType | null
  }

  export type ArmaAvgAggregateOutputType = {
    id: number | null
    numDesparos: number | null
    fabricanteId: number | null
  }

  export type ArmaSumAggregateOutputType = {
    id: number | null
    numDesparos: number | null
    fabricanteId: number | null
  }

  export type ArmaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    calibre: string | null
    numDesparos: number | null
    fabricanteId: number | null
  }

  export type ArmaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    calibre: string | null
    numDesparos: number | null
    fabricanteId: number | null
  }

  export type ArmaCountAggregateOutputType = {
    id: number
    nome: number
    calibre: number
    numDesparos: number
    fabricanteId: number
    _all: number
  }


  export type ArmaAvgAggregateInputType = {
    id?: true
    numDesparos?: true
    fabricanteId?: true
  }

  export type ArmaSumAggregateInputType = {
    id?: true
    numDesparos?: true
    fabricanteId?: true
  }

  export type ArmaMinAggregateInputType = {
    id?: true
    nome?: true
    calibre?: true
    numDesparos?: true
    fabricanteId?: true
  }

  export type ArmaMaxAggregateInputType = {
    id?: true
    nome?: true
    calibre?: true
    numDesparos?: true
    fabricanteId?: true
  }

  export type ArmaCountAggregateInputType = {
    id?: true
    nome?: true
    calibre?: true
    numDesparos?: true
    fabricanteId?: true
    _all?: true
  }

  export type ArmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arma to aggregate.
     */
    where?: ArmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Armas to fetch.
     */
    orderBy?: ArmaOrderByWithRelationInput | ArmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Armas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Armas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Armas
    **/
    _count?: true | ArmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArmaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArmaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArmaMaxAggregateInputType
  }

  export type GetArmaAggregateType<T extends ArmaAggregateArgs> = {
        [P in keyof T & keyof AggregateArma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArma[P]>
      : GetScalarType<T[P], AggregateArma[P]>
  }




  export type ArmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArmaWhereInput
    orderBy?: ArmaOrderByWithAggregationInput | ArmaOrderByWithAggregationInput[]
    by: ArmaScalarFieldEnum[] | ArmaScalarFieldEnum
    having?: ArmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArmaCountAggregateInputType | true
    _avg?: ArmaAvgAggregateInputType
    _sum?: ArmaSumAggregateInputType
    _min?: ArmaMinAggregateInputType
    _max?: ArmaMaxAggregateInputType
  }

  export type ArmaGroupByOutputType = {
    id: number
    nome: string
    calibre: string
    numDesparos: number
    fabricanteId: number
    _count: ArmaCountAggregateOutputType | null
    _avg: ArmaAvgAggregateOutputType | null
    _sum: ArmaSumAggregateOutputType | null
    _min: ArmaMinAggregateOutputType | null
    _max: ArmaMaxAggregateOutputType | null
  }

  type GetArmaGroupByPayload<T extends ArmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArmaGroupByOutputType[P]>
            : GetScalarType<T[P], ArmaGroupByOutputType[P]>
        }
      >
    >


  export type ArmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    calibre?: boolean
    numDesparos?: boolean
    fabricanteId?: boolean
    fabricante?: boolean | FabricanteDefaultArgs<ExtArgs>
    testes?: boolean | Arma$testesArgs<ExtArgs>
    _count?: boolean | ArmaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arma"]>

  export type ArmaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    calibre?: boolean
    numDesparos?: boolean
    fabricanteId?: boolean
    fabricante?: boolean | FabricanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arma"]>

  export type ArmaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    calibre?: boolean
    numDesparos?: boolean
    fabricanteId?: boolean
    fabricante?: boolean | FabricanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arma"]>

  export type ArmaSelectScalar = {
    id?: boolean
    nome?: boolean
    calibre?: boolean
    numDesparos?: boolean
    fabricanteId?: boolean
  }

  export type ArmaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "calibre" | "numDesparos" | "fabricanteId", ExtArgs["result"]["arma"]>
  export type ArmaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fabricante?: boolean | FabricanteDefaultArgs<ExtArgs>
    testes?: boolean | Arma$testesArgs<ExtArgs>
    _count?: boolean | ArmaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArmaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fabricante?: boolean | FabricanteDefaultArgs<ExtArgs>
  }
  export type ArmaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fabricante?: boolean | FabricanteDefaultArgs<ExtArgs>
  }

  export type $ArmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Arma"
    objects: {
      fabricante: Prisma.$FabricantePayload<ExtArgs>
      testes: Prisma.$TestePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      calibre: string
      numDesparos: number
      fabricanteId: number
    }, ExtArgs["result"]["arma"]>
    composites: {}
  }

  type ArmaGetPayload<S extends boolean | null | undefined | ArmaDefaultArgs> = $Result.GetResult<Prisma.$ArmaPayload, S>

  type ArmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArmaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArmaCountAggregateInputType | true
    }

  export interface ArmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Arma'], meta: { name: 'Arma' } }
    /**
     * Find zero or one Arma that matches the filter.
     * @param {ArmaFindUniqueArgs} args - Arguments to find a Arma
     * @example
     * // Get one Arma
     * const arma = await prisma.arma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArmaFindUniqueArgs>(args: SelectSubset<T, ArmaFindUniqueArgs<ExtArgs>>): Prisma__ArmaClient<$Result.GetResult<Prisma.$ArmaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Arma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArmaFindUniqueOrThrowArgs} args - Arguments to find a Arma
     * @example
     * // Get one Arma
     * const arma = await prisma.arma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArmaFindUniqueOrThrowArgs>(args: SelectSubset<T, ArmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArmaClient<$Result.GetResult<Prisma.$ArmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmaFindFirstArgs} args - Arguments to find a Arma
     * @example
     * // Get one Arma
     * const arma = await prisma.arma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArmaFindFirstArgs>(args?: SelectSubset<T, ArmaFindFirstArgs<ExtArgs>>): Prisma__ArmaClient<$Result.GetResult<Prisma.$ArmaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmaFindFirstOrThrowArgs} args - Arguments to find a Arma
     * @example
     * // Get one Arma
     * const arma = await prisma.arma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArmaFindFirstOrThrowArgs>(args?: SelectSubset<T, ArmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArmaClient<$Result.GetResult<Prisma.$ArmaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Armas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Armas
     * const armas = await prisma.arma.findMany()
     * 
     * // Get first 10 Armas
     * const armas = await prisma.arma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const armaWithIdOnly = await prisma.arma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArmaFindManyArgs>(args?: SelectSubset<T, ArmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Arma.
     * @param {ArmaCreateArgs} args - Arguments to create a Arma.
     * @example
     * // Create one Arma
     * const Arma = await prisma.arma.create({
     *   data: {
     *     // ... data to create a Arma
     *   }
     * })
     * 
     */
    create<T extends ArmaCreateArgs>(args: SelectSubset<T, ArmaCreateArgs<ExtArgs>>): Prisma__ArmaClient<$Result.GetResult<Prisma.$ArmaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Armas.
     * @param {ArmaCreateManyArgs} args - Arguments to create many Armas.
     * @example
     * // Create many Armas
     * const arma = await prisma.arma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArmaCreateManyArgs>(args?: SelectSubset<T, ArmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Armas and returns the data saved in the database.
     * @param {ArmaCreateManyAndReturnArgs} args - Arguments to create many Armas.
     * @example
     * // Create many Armas
     * const arma = await prisma.arma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Armas and only return the `id`
     * const armaWithIdOnly = await prisma.arma.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArmaCreateManyAndReturnArgs>(args?: SelectSubset<T, ArmaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArmaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Arma.
     * @param {ArmaDeleteArgs} args - Arguments to delete one Arma.
     * @example
     * // Delete one Arma
     * const Arma = await prisma.arma.delete({
     *   where: {
     *     // ... filter to delete one Arma
     *   }
     * })
     * 
     */
    delete<T extends ArmaDeleteArgs>(args: SelectSubset<T, ArmaDeleteArgs<ExtArgs>>): Prisma__ArmaClient<$Result.GetResult<Prisma.$ArmaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Arma.
     * @param {ArmaUpdateArgs} args - Arguments to update one Arma.
     * @example
     * // Update one Arma
     * const arma = await prisma.arma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArmaUpdateArgs>(args: SelectSubset<T, ArmaUpdateArgs<ExtArgs>>): Prisma__ArmaClient<$Result.GetResult<Prisma.$ArmaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Armas.
     * @param {ArmaDeleteManyArgs} args - Arguments to filter Armas to delete.
     * @example
     * // Delete a few Armas
     * const { count } = await prisma.arma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArmaDeleteManyArgs>(args?: SelectSubset<T, ArmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Armas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Armas
     * const arma = await prisma.arma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArmaUpdateManyArgs>(args: SelectSubset<T, ArmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Armas and returns the data updated in the database.
     * @param {ArmaUpdateManyAndReturnArgs} args - Arguments to update many Armas.
     * @example
     * // Update many Armas
     * const arma = await prisma.arma.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Armas and only return the `id`
     * const armaWithIdOnly = await prisma.arma.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArmaUpdateManyAndReturnArgs>(args: SelectSubset<T, ArmaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArmaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Arma.
     * @param {ArmaUpsertArgs} args - Arguments to update or create a Arma.
     * @example
     * // Update or create a Arma
     * const arma = await prisma.arma.upsert({
     *   create: {
     *     // ... data to create a Arma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Arma we want to update
     *   }
     * })
     */
    upsert<T extends ArmaUpsertArgs>(args: SelectSubset<T, ArmaUpsertArgs<ExtArgs>>): Prisma__ArmaClient<$Result.GetResult<Prisma.$ArmaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Armas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmaCountArgs} args - Arguments to filter Armas to count.
     * @example
     * // Count the number of Armas
     * const count = await prisma.arma.count({
     *   where: {
     *     // ... the filter for the Armas we want to count
     *   }
     * })
    **/
    count<T extends ArmaCountArgs>(
      args?: Subset<T, ArmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Arma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArmaAggregateArgs>(args: Subset<T, ArmaAggregateArgs>): Prisma.PrismaPromise<GetArmaAggregateType<T>>

    /**
     * Group by Arma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArmaGroupByArgs['orderBy'] }
        : { orderBy?: ArmaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Arma model
   */
  readonly fields: ArmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Arma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fabricante<T extends FabricanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FabricanteDefaultArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    testes<T extends Arma$testesArgs<ExtArgs> = {}>(args?: Subset<T, Arma$testesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Arma model
   */
  interface ArmaFieldRefs {
    readonly id: FieldRef<"Arma", 'Int'>
    readonly nome: FieldRef<"Arma", 'String'>
    readonly calibre: FieldRef<"Arma", 'String'>
    readonly numDesparos: FieldRef<"Arma", 'Int'>
    readonly fabricanteId: FieldRef<"Arma", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Arma findUnique
   */
  export type ArmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arma
     */
    select?: ArmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arma
     */
    omit?: ArmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmaInclude<ExtArgs> | null
    /**
     * Filter, which Arma to fetch.
     */
    where: ArmaWhereUniqueInput
  }

  /**
   * Arma findUniqueOrThrow
   */
  export type ArmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arma
     */
    select?: ArmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arma
     */
    omit?: ArmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmaInclude<ExtArgs> | null
    /**
     * Filter, which Arma to fetch.
     */
    where: ArmaWhereUniqueInput
  }

  /**
   * Arma findFirst
   */
  export type ArmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arma
     */
    select?: ArmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arma
     */
    omit?: ArmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmaInclude<ExtArgs> | null
    /**
     * Filter, which Arma to fetch.
     */
    where?: ArmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Armas to fetch.
     */
    orderBy?: ArmaOrderByWithRelationInput | ArmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Armas.
     */
    cursor?: ArmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Armas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Armas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Armas.
     */
    distinct?: ArmaScalarFieldEnum | ArmaScalarFieldEnum[]
  }

  /**
   * Arma findFirstOrThrow
   */
  export type ArmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arma
     */
    select?: ArmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arma
     */
    omit?: ArmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmaInclude<ExtArgs> | null
    /**
     * Filter, which Arma to fetch.
     */
    where?: ArmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Armas to fetch.
     */
    orderBy?: ArmaOrderByWithRelationInput | ArmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Armas.
     */
    cursor?: ArmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Armas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Armas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Armas.
     */
    distinct?: ArmaScalarFieldEnum | ArmaScalarFieldEnum[]
  }

  /**
   * Arma findMany
   */
  export type ArmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arma
     */
    select?: ArmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arma
     */
    omit?: ArmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmaInclude<ExtArgs> | null
    /**
     * Filter, which Armas to fetch.
     */
    where?: ArmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Armas to fetch.
     */
    orderBy?: ArmaOrderByWithRelationInput | ArmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Armas.
     */
    cursor?: ArmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Armas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Armas.
     */
    skip?: number
    distinct?: ArmaScalarFieldEnum | ArmaScalarFieldEnum[]
  }

  /**
   * Arma create
   */
  export type ArmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arma
     */
    select?: ArmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arma
     */
    omit?: ArmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmaInclude<ExtArgs> | null
    /**
     * The data needed to create a Arma.
     */
    data: XOR<ArmaCreateInput, ArmaUncheckedCreateInput>
  }

  /**
   * Arma createMany
   */
  export type ArmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Armas.
     */
    data: ArmaCreateManyInput | ArmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Arma createManyAndReturn
   */
  export type ArmaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arma
     */
    select?: ArmaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Arma
     */
    omit?: ArmaOmit<ExtArgs> | null
    /**
     * The data used to create many Armas.
     */
    data: ArmaCreateManyInput | ArmaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Arma update
   */
  export type ArmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arma
     */
    select?: ArmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arma
     */
    omit?: ArmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmaInclude<ExtArgs> | null
    /**
     * The data needed to update a Arma.
     */
    data: XOR<ArmaUpdateInput, ArmaUncheckedUpdateInput>
    /**
     * Choose, which Arma to update.
     */
    where: ArmaWhereUniqueInput
  }

  /**
   * Arma updateMany
   */
  export type ArmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Armas.
     */
    data: XOR<ArmaUpdateManyMutationInput, ArmaUncheckedUpdateManyInput>
    /**
     * Filter which Armas to update
     */
    where?: ArmaWhereInput
    /**
     * Limit how many Armas to update.
     */
    limit?: number
  }

  /**
   * Arma updateManyAndReturn
   */
  export type ArmaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arma
     */
    select?: ArmaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Arma
     */
    omit?: ArmaOmit<ExtArgs> | null
    /**
     * The data used to update Armas.
     */
    data: XOR<ArmaUpdateManyMutationInput, ArmaUncheckedUpdateManyInput>
    /**
     * Filter which Armas to update
     */
    where?: ArmaWhereInput
    /**
     * Limit how many Armas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Arma upsert
   */
  export type ArmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arma
     */
    select?: ArmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arma
     */
    omit?: ArmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmaInclude<ExtArgs> | null
    /**
     * The filter to search for the Arma to update in case it exists.
     */
    where: ArmaWhereUniqueInput
    /**
     * In case the Arma found by the `where` argument doesn't exist, create a new Arma with this data.
     */
    create: XOR<ArmaCreateInput, ArmaUncheckedCreateInput>
    /**
     * In case the Arma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArmaUpdateInput, ArmaUncheckedUpdateInput>
  }

  /**
   * Arma delete
   */
  export type ArmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arma
     */
    select?: ArmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arma
     */
    omit?: ArmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmaInclude<ExtArgs> | null
    /**
     * Filter which Arma to delete.
     */
    where: ArmaWhereUniqueInput
  }

  /**
   * Arma deleteMany
   */
  export type ArmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Armas to delete
     */
    where?: ArmaWhereInput
    /**
     * Limit how many Armas to delete.
     */
    limit?: number
  }

  /**
   * Arma.testes
   */
  export type Arma$testesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    where?: TesteWhereInput
    orderBy?: TesteOrderByWithRelationInput | TesteOrderByWithRelationInput[]
    cursor?: TesteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TesteScalarFieldEnum | TesteScalarFieldEnum[]
  }

  /**
   * Arma without action
   */
  export type ArmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arma
     */
    select?: ArmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arma
     */
    omit?: ArmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmaInclude<ExtArgs> | null
  }


  /**
   * Model Fabricante
   */

  export type AggregateFabricante = {
    _count: FabricanteCountAggregateOutputType | null
    _avg: FabricanteAvgAggregateOutputType | null
    _sum: FabricanteSumAggregateOutputType | null
    _min: FabricanteMinAggregateOutputType | null
    _max: FabricanteMaxAggregateOutputType | null
  }

  export type FabricanteAvgAggregateOutputType = {
    id: number | null
    anoFundacao: number | null
  }

  export type FabricanteSumAggregateOutputType = {
    id: number | null
    anoFundacao: number | null
  }

  export type FabricanteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    paisOrigem: string | null
    anoFundacao: number | null
    tipo: string | null
  }

  export type FabricanteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    paisOrigem: string | null
    anoFundacao: number | null
    tipo: string | null
  }

  export type FabricanteCountAggregateOutputType = {
    id: number
    nome: number
    paisOrigem: number
    anoFundacao: number
    tipo: number
    _all: number
  }


  export type FabricanteAvgAggregateInputType = {
    id?: true
    anoFundacao?: true
  }

  export type FabricanteSumAggregateInputType = {
    id?: true
    anoFundacao?: true
  }

  export type FabricanteMinAggregateInputType = {
    id?: true
    nome?: true
    paisOrigem?: true
    anoFundacao?: true
    tipo?: true
  }

  export type FabricanteMaxAggregateInputType = {
    id?: true
    nome?: true
    paisOrigem?: true
    anoFundacao?: true
    tipo?: true
  }

  export type FabricanteCountAggregateInputType = {
    id?: true
    nome?: true
    paisOrigem?: true
    anoFundacao?: true
    tipo?: true
    _all?: true
  }

  export type FabricanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fabricante to aggregate.
     */
    where?: FabricanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fabricantes to fetch.
     */
    orderBy?: FabricanteOrderByWithRelationInput | FabricanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FabricanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fabricantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fabricantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fabricantes
    **/
    _count?: true | FabricanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FabricanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FabricanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FabricanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FabricanteMaxAggregateInputType
  }

  export type GetFabricanteAggregateType<T extends FabricanteAggregateArgs> = {
        [P in keyof T & keyof AggregateFabricante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFabricante[P]>
      : GetScalarType<T[P], AggregateFabricante[P]>
  }




  export type FabricanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FabricanteWhereInput
    orderBy?: FabricanteOrderByWithAggregationInput | FabricanteOrderByWithAggregationInput[]
    by: FabricanteScalarFieldEnum[] | FabricanteScalarFieldEnum
    having?: FabricanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FabricanteCountAggregateInputType | true
    _avg?: FabricanteAvgAggregateInputType
    _sum?: FabricanteSumAggregateInputType
    _min?: FabricanteMinAggregateInputType
    _max?: FabricanteMaxAggregateInputType
  }

  export type FabricanteGroupByOutputType = {
    id: number
    nome: string
    paisOrigem: string
    anoFundacao: number
    tipo: string
    _count: FabricanteCountAggregateOutputType | null
    _avg: FabricanteAvgAggregateOutputType | null
    _sum: FabricanteSumAggregateOutputType | null
    _min: FabricanteMinAggregateOutputType | null
    _max: FabricanteMaxAggregateOutputType | null
  }

  type GetFabricanteGroupByPayload<T extends FabricanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FabricanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FabricanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FabricanteGroupByOutputType[P]>
            : GetScalarType<T[P], FabricanteGroupByOutputType[P]>
        }
      >
    >


  export type FabricanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    paisOrigem?: boolean
    anoFundacao?: boolean
    tipo?: boolean
    arma?: boolean | Fabricante$armaArgs<ExtArgs>
    _count?: boolean | FabricanteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fabricante"]>

  export type FabricanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    paisOrigem?: boolean
    anoFundacao?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["fabricante"]>

  export type FabricanteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    paisOrigem?: boolean
    anoFundacao?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["fabricante"]>

  export type FabricanteSelectScalar = {
    id?: boolean
    nome?: boolean
    paisOrigem?: boolean
    anoFundacao?: boolean
    tipo?: boolean
  }

  export type FabricanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "paisOrigem" | "anoFundacao" | "tipo", ExtArgs["result"]["fabricante"]>
  export type FabricanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arma?: boolean | Fabricante$armaArgs<ExtArgs>
    _count?: boolean | FabricanteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FabricanteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FabricanteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FabricantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fabricante"
    objects: {
      arma: Prisma.$ArmaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      paisOrigem: string
      anoFundacao: number
      tipo: string
    }, ExtArgs["result"]["fabricante"]>
    composites: {}
  }

  type FabricanteGetPayload<S extends boolean | null | undefined | FabricanteDefaultArgs> = $Result.GetResult<Prisma.$FabricantePayload, S>

  type FabricanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FabricanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FabricanteCountAggregateInputType | true
    }

  export interface FabricanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fabricante'], meta: { name: 'Fabricante' } }
    /**
     * Find zero or one Fabricante that matches the filter.
     * @param {FabricanteFindUniqueArgs} args - Arguments to find a Fabricante
     * @example
     * // Get one Fabricante
     * const fabricante = await prisma.fabricante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FabricanteFindUniqueArgs>(args: SelectSubset<T, FabricanteFindUniqueArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fabricante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FabricanteFindUniqueOrThrowArgs} args - Arguments to find a Fabricante
     * @example
     * // Get one Fabricante
     * const fabricante = await prisma.fabricante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FabricanteFindUniqueOrThrowArgs>(args: SelectSubset<T, FabricanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fabricante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricanteFindFirstArgs} args - Arguments to find a Fabricante
     * @example
     * // Get one Fabricante
     * const fabricante = await prisma.fabricante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FabricanteFindFirstArgs>(args?: SelectSubset<T, FabricanteFindFirstArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fabricante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricanteFindFirstOrThrowArgs} args - Arguments to find a Fabricante
     * @example
     * // Get one Fabricante
     * const fabricante = await prisma.fabricante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FabricanteFindFirstOrThrowArgs>(args?: SelectSubset<T, FabricanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fabricantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fabricantes
     * const fabricantes = await prisma.fabricante.findMany()
     * 
     * // Get first 10 Fabricantes
     * const fabricantes = await prisma.fabricante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fabricanteWithIdOnly = await prisma.fabricante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FabricanteFindManyArgs>(args?: SelectSubset<T, FabricanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fabricante.
     * @param {FabricanteCreateArgs} args - Arguments to create a Fabricante.
     * @example
     * // Create one Fabricante
     * const Fabricante = await prisma.fabricante.create({
     *   data: {
     *     // ... data to create a Fabricante
     *   }
     * })
     * 
     */
    create<T extends FabricanteCreateArgs>(args: SelectSubset<T, FabricanteCreateArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fabricantes.
     * @param {FabricanteCreateManyArgs} args - Arguments to create many Fabricantes.
     * @example
     * // Create many Fabricantes
     * const fabricante = await prisma.fabricante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FabricanteCreateManyArgs>(args?: SelectSubset<T, FabricanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fabricantes and returns the data saved in the database.
     * @param {FabricanteCreateManyAndReturnArgs} args - Arguments to create many Fabricantes.
     * @example
     * // Create many Fabricantes
     * const fabricante = await prisma.fabricante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fabricantes and only return the `id`
     * const fabricanteWithIdOnly = await prisma.fabricante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FabricanteCreateManyAndReturnArgs>(args?: SelectSubset<T, FabricanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fabricante.
     * @param {FabricanteDeleteArgs} args - Arguments to delete one Fabricante.
     * @example
     * // Delete one Fabricante
     * const Fabricante = await prisma.fabricante.delete({
     *   where: {
     *     // ... filter to delete one Fabricante
     *   }
     * })
     * 
     */
    delete<T extends FabricanteDeleteArgs>(args: SelectSubset<T, FabricanteDeleteArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fabricante.
     * @param {FabricanteUpdateArgs} args - Arguments to update one Fabricante.
     * @example
     * // Update one Fabricante
     * const fabricante = await prisma.fabricante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FabricanteUpdateArgs>(args: SelectSubset<T, FabricanteUpdateArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fabricantes.
     * @param {FabricanteDeleteManyArgs} args - Arguments to filter Fabricantes to delete.
     * @example
     * // Delete a few Fabricantes
     * const { count } = await prisma.fabricante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FabricanteDeleteManyArgs>(args?: SelectSubset<T, FabricanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fabricantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fabricantes
     * const fabricante = await prisma.fabricante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FabricanteUpdateManyArgs>(args: SelectSubset<T, FabricanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fabricantes and returns the data updated in the database.
     * @param {FabricanteUpdateManyAndReturnArgs} args - Arguments to update many Fabricantes.
     * @example
     * // Update many Fabricantes
     * const fabricante = await prisma.fabricante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fabricantes and only return the `id`
     * const fabricanteWithIdOnly = await prisma.fabricante.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FabricanteUpdateManyAndReturnArgs>(args: SelectSubset<T, FabricanteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fabricante.
     * @param {FabricanteUpsertArgs} args - Arguments to update or create a Fabricante.
     * @example
     * // Update or create a Fabricante
     * const fabricante = await prisma.fabricante.upsert({
     *   create: {
     *     // ... data to create a Fabricante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fabricante we want to update
     *   }
     * })
     */
    upsert<T extends FabricanteUpsertArgs>(args: SelectSubset<T, FabricanteUpsertArgs<ExtArgs>>): Prisma__FabricanteClient<$Result.GetResult<Prisma.$FabricantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fabricantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricanteCountArgs} args - Arguments to filter Fabricantes to count.
     * @example
     * // Count the number of Fabricantes
     * const count = await prisma.fabricante.count({
     *   where: {
     *     // ... the filter for the Fabricantes we want to count
     *   }
     * })
    **/
    count<T extends FabricanteCountArgs>(
      args?: Subset<T, FabricanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FabricanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fabricante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FabricanteAggregateArgs>(args: Subset<T, FabricanteAggregateArgs>): Prisma.PrismaPromise<GetFabricanteAggregateType<T>>

    /**
     * Group by Fabricante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricanteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FabricanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FabricanteGroupByArgs['orderBy'] }
        : { orderBy?: FabricanteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FabricanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFabricanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fabricante model
   */
  readonly fields: FabricanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fabricante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FabricanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    arma<T extends Fabricante$armaArgs<ExtArgs> = {}>(args?: Subset<T, Fabricante$armaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fabricante model
   */
  interface FabricanteFieldRefs {
    readonly id: FieldRef<"Fabricante", 'Int'>
    readonly nome: FieldRef<"Fabricante", 'String'>
    readonly paisOrigem: FieldRef<"Fabricante", 'String'>
    readonly anoFundacao: FieldRef<"Fabricante", 'Int'>
    readonly tipo: FieldRef<"Fabricante", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fabricante findUnique
   */
  export type FabricanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * Filter, which Fabricante to fetch.
     */
    where: FabricanteWhereUniqueInput
  }

  /**
   * Fabricante findUniqueOrThrow
   */
  export type FabricanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * Filter, which Fabricante to fetch.
     */
    where: FabricanteWhereUniqueInput
  }

  /**
   * Fabricante findFirst
   */
  export type FabricanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * Filter, which Fabricante to fetch.
     */
    where?: FabricanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fabricantes to fetch.
     */
    orderBy?: FabricanteOrderByWithRelationInput | FabricanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fabricantes.
     */
    cursor?: FabricanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fabricantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fabricantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fabricantes.
     */
    distinct?: FabricanteScalarFieldEnum | FabricanteScalarFieldEnum[]
  }

  /**
   * Fabricante findFirstOrThrow
   */
  export type FabricanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * Filter, which Fabricante to fetch.
     */
    where?: FabricanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fabricantes to fetch.
     */
    orderBy?: FabricanteOrderByWithRelationInput | FabricanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fabricantes.
     */
    cursor?: FabricanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fabricantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fabricantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fabricantes.
     */
    distinct?: FabricanteScalarFieldEnum | FabricanteScalarFieldEnum[]
  }

  /**
   * Fabricante findMany
   */
  export type FabricanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * Filter, which Fabricantes to fetch.
     */
    where?: FabricanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fabricantes to fetch.
     */
    orderBy?: FabricanteOrderByWithRelationInput | FabricanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fabricantes.
     */
    cursor?: FabricanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fabricantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fabricantes.
     */
    skip?: number
    distinct?: FabricanteScalarFieldEnum | FabricanteScalarFieldEnum[]
  }

  /**
   * Fabricante create
   */
  export type FabricanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * The data needed to create a Fabricante.
     */
    data: XOR<FabricanteCreateInput, FabricanteUncheckedCreateInput>
  }

  /**
   * Fabricante createMany
   */
  export type FabricanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fabricantes.
     */
    data: FabricanteCreateManyInput | FabricanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fabricante createManyAndReturn
   */
  export type FabricanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * The data used to create many Fabricantes.
     */
    data: FabricanteCreateManyInput | FabricanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fabricante update
   */
  export type FabricanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * The data needed to update a Fabricante.
     */
    data: XOR<FabricanteUpdateInput, FabricanteUncheckedUpdateInput>
    /**
     * Choose, which Fabricante to update.
     */
    where: FabricanteWhereUniqueInput
  }

  /**
   * Fabricante updateMany
   */
  export type FabricanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fabricantes.
     */
    data: XOR<FabricanteUpdateManyMutationInput, FabricanteUncheckedUpdateManyInput>
    /**
     * Filter which Fabricantes to update
     */
    where?: FabricanteWhereInput
    /**
     * Limit how many Fabricantes to update.
     */
    limit?: number
  }

  /**
   * Fabricante updateManyAndReturn
   */
  export type FabricanteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * The data used to update Fabricantes.
     */
    data: XOR<FabricanteUpdateManyMutationInput, FabricanteUncheckedUpdateManyInput>
    /**
     * Filter which Fabricantes to update
     */
    where?: FabricanteWhereInput
    /**
     * Limit how many Fabricantes to update.
     */
    limit?: number
  }

  /**
   * Fabricante upsert
   */
  export type FabricanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * The filter to search for the Fabricante to update in case it exists.
     */
    where: FabricanteWhereUniqueInput
    /**
     * In case the Fabricante found by the `where` argument doesn't exist, create a new Fabricante with this data.
     */
    create: XOR<FabricanteCreateInput, FabricanteUncheckedCreateInput>
    /**
     * In case the Fabricante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FabricanteUpdateInput, FabricanteUncheckedUpdateInput>
  }

  /**
   * Fabricante delete
   */
  export type FabricanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
    /**
     * Filter which Fabricante to delete.
     */
    where: FabricanteWhereUniqueInput
  }

  /**
   * Fabricante deleteMany
   */
  export type FabricanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fabricantes to delete
     */
    where?: FabricanteWhereInput
    /**
     * Limit how many Fabricantes to delete.
     */
    limit?: number
  }

  /**
   * Fabricante.arma
   */
  export type Fabricante$armaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arma
     */
    select?: ArmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arma
     */
    omit?: ArmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmaInclude<ExtArgs> | null
    where?: ArmaWhereInput
    orderBy?: ArmaOrderByWithRelationInput | ArmaOrderByWithRelationInput[]
    cursor?: ArmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArmaScalarFieldEnum | ArmaScalarFieldEnum[]
  }

  /**
   * Fabricante without action
   */
  export type FabricanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fabricante
     */
    select?: FabricanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fabricante
     */
    omit?: FabricanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FabricanteInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    licencaEsp: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    licencaEsp: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    licencaEsp: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    licencaEsp?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    licencaEsp?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    licencaEsp?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nome: string
    email: string
    licencaEsp: string
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    licencaEsp?: boolean
    testes?: boolean | Cliente$testesArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    licencaEsp?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    licencaEsp?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    licencaEsp?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "licencaEsp", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testes?: boolean | Cliente$testesArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      testes: Prisma.$TestePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      licencaEsp: string
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testes<T extends Cliente$testesArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$testesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly licencaEsp: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.testes
   */
  export type Cliente$testesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    where?: TesteWhereInput
    orderBy?: TesteOrderByWithRelationInput | TesteOrderByWithRelationInput[]
    cursor?: TesteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TesteScalarFieldEnum | TesteScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Teste
   */

  export type AggregateTeste = {
    _count: TesteCountAggregateOutputType | null
    _avg: TesteAvgAggregateOutputType | null
    _sum: TesteSumAggregateOutputType | null
    _min: TesteMinAggregateOutputType | null
    _max: TesteMaxAggregateOutputType | null
  }

  export type TesteAvgAggregateOutputType = {
    id: number | null
    clienteId: number | null
    armaId: number | null
  }

  export type TesteSumAggregateOutputType = {
    id: number | null
    clienteId: number | null
    armaId: number | null
  }

  export type TesteMinAggregateOutputType = {
    id: number | null
    data: Date | null
    resultado: string | null
    clienteId: number | null
    armaId: number | null
  }

  export type TesteMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    resultado: string | null
    clienteId: number | null
    armaId: number | null
  }

  export type TesteCountAggregateOutputType = {
    id: number
    data: number
    resultado: number
    clienteId: number
    armaId: number
    _all: number
  }


  export type TesteAvgAggregateInputType = {
    id?: true
    clienteId?: true
    armaId?: true
  }

  export type TesteSumAggregateInputType = {
    id?: true
    clienteId?: true
    armaId?: true
  }

  export type TesteMinAggregateInputType = {
    id?: true
    data?: true
    resultado?: true
    clienteId?: true
    armaId?: true
  }

  export type TesteMaxAggregateInputType = {
    id?: true
    data?: true
    resultado?: true
    clienteId?: true
    armaId?: true
  }

  export type TesteCountAggregateInputType = {
    id?: true
    data?: true
    resultado?: true
    clienteId?: true
    armaId?: true
    _all?: true
  }

  export type TesteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teste to aggregate.
     */
    where?: TesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testes to fetch.
     */
    orderBy?: TesteOrderByWithRelationInput | TesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testes
    **/
    _count?: true | TesteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TesteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TesteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TesteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TesteMaxAggregateInputType
  }

  export type GetTesteAggregateType<T extends TesteAggregateArgs> = {
        [P in keyof T & keyof AggregateTeste]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeste[P]>
      : GetScalarType<T[P], AggregateTeste[P]>
  }




  export type TesteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TesteWhereInput
    orderBy?: TesteOrderByWithAggregationInput | TesteOrderByWithAggregationInput[]
    by: TesteScalarFieldEnum[] | TesteScalarFieldEnum
    having?: TesteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TesteCountAggregateInputType | true
    _avg?: TesteAvgAggregateInputType
    _sum?: TesteSumAggregateInputType
    _min?: TesteMinAggregateInputType
    _max?: TesteMaxAggregateInputType
  }

  export type TesteGroupByOutputType = {
    id: number
    data: Date
    resultado: string
    clienteId: number
    armaId: number
    _count: TesteCountAggregateOutputType | null
    _avg: TesteAvgAggregateOutputType | null
    _sum: TesteSumAggregateOutputType | null
    _min: TesteMinAggregateOutputType | null
    _max: TesteMaxAggregateOutputType | null
  }

  type GetTesteGroupByPayload<T extends TesteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TesteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TesteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TesteGroupByOutputType[P]>
            : GetScalarType<T[P], TesteGroupByOutputType[P]>
        }
      >
    >


  export type TesteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    resultado?: boolean
    clienteId?: boolean
    armaId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    arma?: boolean | ArmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teste"]>

  export type TesteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    resultado?: boolean
    clienteId?: boolean
    armaId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    arma?: boolean | ArmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teste"]>

  export type TesteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    resultado?: boolean
    clienteId?: boolean
    armaId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    arma?: boolean | ArmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teste"]>

  export type TesteSelectScalar = {
    id?: boolean
    data?: boolean
    resultado?: boolean
    clienteId?: boolean
    armaId?: boolean
  }

  export type TesteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "resultado" | "clienteId" | "armaId", ExtArgs["result"]["teste"]>
  export type TesteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    arma?: boolean | ArmaDefaultArgs<ExtArgs>
  }
  export type TesteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    arma?: boolean | ArmaDefaultArgs<ExtArgs>
  }
  export type TesteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    arma?: boolean | ArmaDefaultArgs<ExtArgs>
  }

  export type $TestePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teste"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      arma: Prisma.$ArmaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      resultado: string
      clienteId: number
      armaId: number
    }, ExtArgs["result"]["teste"]>
    composites: {}
  }

  type TesteGetPayload<S extends boolean | null | undefined | TesteDefaultArgs> = $Result.GetResult<Prisma.$TestePayload, S>

  type TesteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TesteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TesteCountAggregateInputType | true
    }

  export interface TesteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teste'], meta: { name: 'Teste' } }
    /**
     * Find zero or one Teste that matches the filter.
     * @param {TesteFindUniqueArgs} args - Arguments to find a Teste
     * @example
     * // Get one Teste
     * const teste = await prisma.teste.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TesteFindUniqueArgs>(args: SelectSubset<T, TesteFindUniqueArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teste that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TesteFindUniqueOrThrowArgs} args - Arguments to find a Teste
     * @example
     * // Get one Teste
     * const teste = await prisma.teste.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TesteFindUniqueOrThrowArgs>(args: SelectSubset<T, TesteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teste that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteFindFirstArgs} args - Arguments to find a Teste
     * @example
     * // Get one Teste
     * const teste = await prisma.teste.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TesteFindFirstArgs>(args?: SelectSubset<T, TesteFindFirstArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teste that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteFindFirstOrThrowArgs} args - Arguments to find a Teste
     * @example
     * // Get one Teste
     * const teste = await prisma.teste.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TesteFindFirstOrThrowArgs>(args?: SelectSubset<T, TesteFindFirstOrThrowArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testes
     * const testes = await prisma.teste.findMany()
     * 
     * // Get first 10 Testes
     * const testes = await prisma.teste.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testeWithIdOnly = await prisma.teste.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TesteFindManyArgs>(args?: SelectSubset<T, TesteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teste.
     * @param {TesteCreateArgs} args - Arguments to create a Teste.
     * @example
     * // Create one Teste
     * const Teste = await prisma.teste.create({
     *   data: {
     *     // ... data to create a Teste
     *   }
     * })
     * 
     */
    create<T extends TesteCreateArgs>(args: SelectSubset<T, TesteCreateArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testes.
     * @param {TesteCreateManyArgs} args - Arguments to create many Testes.
     * @example
     * // Create many Testes
     * const teste = await prisma.teste.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TesteCreateManyArgs>(args?: SelectSubset<T, TesteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testes and returns the data saved in the database.
     * @param {TesteCreateManyAndReturnArgs} args - Arguments to create many Testes.
     * @example
     * // Create many Testes
     * const teste = await prisma.teste.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testes and only return the `id`
     * const testeWithIdOnly = await prisma.teste.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TesteCreateManyAndReturnArgs>(args?: SelectSubset<T, TesteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teste.
     * @param {TesteDeleteArgs} args - Arguments to delete one Teste.
     * @example
     * // Delete one Teste
     * const Teste = await prisma.teste.delete({
     *   where: {
     *     // ... filter to delete one Teste
     *   }
     * })
     * 
     */
    delete<T extends TesteDeleteArgs>(args: SelectSubset<T, TesteDeleteArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teste.
     * @param {TesteUpdateArgs} args - Arguments to update one Teste.
     * @example
     * // Update one Teste
     * const teste = await prisma.teste.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TesteUpdateArgs>(args: SelectSubset<T, TesteUpdateArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testes.
     * @param {TesteDeleteManyArgs} args - Arguments to filter Testes to delete.
     * @example
     * // Delete a few Testes
     * const { count } = await prisma.teste.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TesteDeleteManyArgs>(args?: SelectSubset<T, TesteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testes
     * const teste = await prisma.teste.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TesteUpdateManyArgs>(args: SelectSubset<T, TesteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testes and returns the data updated in the database.
     * @param {TesteUpdateManyAndReturnArgs} args - Arguments to update many Testes.
     * @example
     * // Update many Testes
     * const teste = await prisma.teste.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Testes and only return the `id`
     * const testeWithIdOnly = await prisma.teste.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TesteUpdateManyAndReturnArgs>(args: SelectSubset<T, TesteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teste.
     * @param {TesteUpsertArgs} args - Arguments to update or create a Teste.
     * @example
     * // Update or create a Teste
     * const teste = await prisma.teste.upsert({
     *   create: {
     *     // ... data to create a Teste
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teste we want to update
     *   }
     * })
     */
    upsert<T extends TesteUpsertArgs>(args: SelectSubset<T, TesteUpsertArgs<ExtArgs>>): Prisma__TesteClient<$Result.GetResult<Prisma.$TestePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteCountArgs} args - Arguments to filter Testes to count.
     * @example
     * // Count the number of Testes
     * const count = await prisma.teste.count({
     *   where: {
     *     // ... the filter for the Testes we want to count
     *   }
     * })
    **/
    count<T extends TesteCountArgs>(
      args?: Subset<T, TesteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TesteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TesteAggregateArgs>(args: Subset<T, TesteAggregateArgs>): Prisma.PrismaPromise<GetTesteAggregateType<T>>

    /**
     * Group by Teste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TesteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TesteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TesteGroupByArgs['orderBy'] }
        : { orderBy?: TesteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TesteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTesteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teste model
   */
  readonly fields: TesteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teste.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TesteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    arma<T extends ArmaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArmaDefaultArgs<ExtArgs>>): Prisma__ArmaClient<$Result.GetResult<Prisma.$ArmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teste model
   */
  interface TesteFieldRefs {
    readonly id: FieldRef<"Teste", 'Int'>
    readonly data: FieldRef<"Teste", 'DateTime'>
    readonly resultado: FieldRef<"Teste", 'String'>
    readonly clienteId: FieldRef<"Teste", 'Int'>
    readonly armaId: FieldRef<"Teste", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Teste findUnique
   */
  export type TesteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * Filter, which Teste to fetch.
     */
    where: TesteWhereUniqueInput
  }

  /**
   * Teste findUniqueOrThrow
   */
  export type TesteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * Filter, which Teste to fetch.
     */
    where: TesteWhereUniqueInput
  }

  /**
   * Teste findFirst
   */
  export type TesteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * Filter, which Teste to fetch.
     */
    where?: TesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testes to fetch.
     */
    orderBy?: TesteOrderByWithRelationInput | TesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testes.
     */
    cursor?: TesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testes.
     */
    distinct?: TesteScalarFieldEnum | TesteScalarFieldEnum[]
  }

  /**
   * Teste findFirstOrThrow
   */
  export type TesteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * Filter, which Teste to fetch.
     */
    where?: TesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testes to fetch.
     */
    orderBy?: TesteOrderByWithRelationInput | TesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testes.
     */
    cursor?: TesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testes.
     */
    distinct?: TesteScalarFieldEnum | TesteScalarFieldEnum[]
  }

  /**
   * Teste findMany
   */
  export type TesteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * Filter, which Testes to fetch.
     */
    where?: TesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testes to fetch.
     */
    orderBy?: TesteOrderByWithRelationInput | TesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testes.
     */
    cursor?: TesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testes.
     */
    skip?: number
    distinct?: TesteScalarFieldEnum | TesteScalarFieldEnum[]
  }

  /**
   * Teste create
   */
  export type TesteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * The data needed to create a Teste.
     */
    data: XOR<TesteCreateInput, TesteUncheckedCreateInput>
  }

  /**
   * Teste createMany
   */
  export type TesteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testes.
     */
    data: TesteCreateManyInput | TesteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teste createManyAndReturn
   */
  export type TesteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * The data used to create many Testes.
     */
    data: TesteCreateManyInput | TesteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teste update
   */
  export type TesteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * The data needed to update a Teste.
     */
    data: XOR<TesteUpdateInput, TesteUncheckedUpdateInput>
    /**
     * Choose, which Teste to update.
     */
    where: TesteWhereUniqueInput
  }

  /**
   * Teste updateMany
   */
  export type TesteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testes.
     */
    data: XOR<TesteUpdateManyMutationInput, TesteUncheckedUpdateManyInput>
    /**
     * Filter which Testes to update
     */
    where?: TesteWhereInput
    /**
     * Limit how many Testes to update.
     */
    limit?: number
  }

  /**
   * Teste updateManyAndReturn
   */
  export type TesteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * The data used to update Testes.
     */
    data: XOR<TesteUpdateManyMutationInput, TesteUncheckedUpdateManyInput>
    /**
     * Filter which Testes to update
     */
    where?: TesteWhereInput
    /**
     * Limit how many Testes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teste upsert
   */
  export type TesteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * The filter to search for the Teste to update in case it exists.
     */
    where: TesteWhereUniqueInput
    /**
     * In case the Teste found by the `where` argument doesn't exist, create a new Teste with this data.
     */
    create: XOR<TesteCreateInput, TesteUncheckedCreateInput>
    /**
     * In case the Teste was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TesteUpdateInput, TesteUncheckedUpdateInput>
  }

  /**
   * Teste delete
   */
  export type TesteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
    /**
     * Filter which Teste to delete.
     */
    where: TesteWhereUniqueInput
  }

  /**
   * Teste deleteMany
   */
  export type TesteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testes to delete
     */
    where?: TesteWhereInput
    /**
     * Limit how many Testes to delete.
     */
    limit?: number
  }

  /**
   * Teste without action
   */
  export type TesteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teste
     */
    select?: TesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teste
     */
    omit?: TesteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TesteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ArmaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    calibre: 'calibre',
    numDesparos: 'numDesparos',
    fabricanteId: 'fabricanteId'
  };

  export type ArmaScalarFieldEnum = (typeof ArmaScalarFieldEnum)[keyof typeof ArmaScalarFieldEnum]


  export const FabricanteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    paisOrigem: 'paisOrigem',
    anoFundacao: 'anoFundacao',
    tipo: 'tipo'
  };

  export type FabricanteScalarFieldEnum = (typeof FabricanteScalarFieldEnum)[keyof typeof FabricanteScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    licencaEsp: 'licencaEsp'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const TesteScalarFieldEnum: {
    id: 'id',
    data: 'data',
    resultado: 'resultado',
    clienteId: 'clienteId',
    armaId: 'armaId'
  };

  export type TesteScalarFieldEnum = (typeof TesteScalarFieldEnum)[keyof typeof TesteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ArmaWhereInput = {
    AND?: ArmaWhereInput | ArmaWhereInput[]
    OR?: ArmaWhereInput[]
    NOT?: ArmaWhereInput | ArmaWhereInput[]
    id?: IntFilter<"Arma"> | number
    nome?: StringFilter<"Arma"> | string
    calibre?: StringFilter<"Arma"> | string
    numDesparos?: IntFilter<"Arma"> | number
    fabricanteId?: IntFilter<"Arma"> | number
    fabricante?: XOR<FabricanteScalarRelationFilter, FabricanteWhereInput>
    testes?: TesteListRelationFilter
  }

  export type ArmaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    calibre?: SortOrder
    numDesparos?: SortOrder
    fabricanteId?: SortOrder
    fabricante?: FabricanteOrderByWithRelationInput
    testes?: TesteOrderByRelationAggregateInput
  }

  export type ArmaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArmaWhereInput | ArmaWhereInput[]
    OR?: ArmaWhereInput[]
    NOT?: ArmaWhereInput | ArmaWhereInput[]
    nome?: StringFilter<"Arma"> | string
    calibre?: StringFilter<"Arma"> | string
    numDesparos?: IntFilter<"Arma"> | number
    fabricanteId?: IntFilter<"Arma"> | number
    fabricante?: XOR<FabricanteScalarRelationFilter, FabricanteWhereInput>
    testes?: TesteListRelationFilter
  }, "id">

  export type ArmaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    calibre?: SortOrder
    numDesparos?: SortOrder
    fabricanteId?: SortOrder
    _count?: ArmaCountOrderByAggregateInput
    _avg?: ArmaAvgOrderByAggregateInput
    _max?: ArmaMaxOrderByAggregateInput
    _min?: ArmaMinOrderByAggregateInput
    _sum?: ArmaSumOrderByAggregateInput
  }

  export type ArmaScalarWhereWithAggregatesInput = {
    AND?: ArmaScalarWhereWithAggregatesInput | ArmaScalarWhereWithAggregatesInput[]
    OR?: ArmaScalarWhereWithAggregatesInput[]
    NOT?: ArmaScalarWhereWithAggregatesInput | ArmaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Arma"> | number
    nome?: StringWithAggregatesFilter<"Arma"> | string
    calibre?: StringWithAggregatesFilter<"Arma"> | string
    numDesparos?: IntWithAggregatesFilter<"Arma"> | number
    fabricanteId?: IntWithAggregatesFilter<"Arma"> | number
  }

  export type FabricanteWhereInput = {
    AND?: FabricanteWhereInput | FabricanteWhereInput[]
    OR?: FabricanteWhereInput[]
    NOT?: FabricanteWhereInput | FabricanteWhereInput[]
    id?: IntFilter<"Fabricante"> | number
    nome?: StringFilter<"Fabricante"> | string
    paisOrigem?: StringFilter<"Fabricante"> | string
    anoFundacao?: IntFilter<"Fabricante"> | number
    tipo?: StringFilter<"Fabricante"> | string
    arma?: ArmaListRelationFilter
  }

  export type FabricanteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    paisOrigem?: SortOrder
    anoFundacao?: SortOrder
    tipo?: SortOrder
    arma?: ArmaOrderByRelationAggregateInput
  }

  export type FabricanteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FabricanteWhereInput | FabricanteWhereInput[]
    OR?: FabricanteWhereInput[]
    NOT?: FabricanteWhereInput | FabricanteWhereInput[]
    nome?: StringFilter<"Fabricante"> | string
    paisOrigem?: StringFilter<"Fabricante"> | string
    anoFundacao?: IntFilter<"Fabricante"> | number
    tipo?: StringFilter<"Fabricante"> | string
    arma?: ArmaListRelationFilter
  }, "id">

  export type FabricanteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    paisOrigem?: SortOrder
    anoFundacao?: SortOrder
    tipo?: SortOrder
    _count?: FabricanteCountOrderByAggregateInput
    _avg?: FabricanteAvgOrderByAggregateInput
    _max?: FabricanteMaxOrderByAggregateInput
    _min?: FabricanteMinOrderByAggregateInput
    _sum?: FabricanteSumOrderByAggregateInput
  }

  export type FabricanteScalarWhereWithAggregatesInput = {
    AND?: FabricanteScalarWhereWithAggregatesInput | FabricanteScalarWhereWithAggregatesInput[]
    OR?: FabricanteScalarWhereWithAggregatesInput[]
    NOT?: FabricanteScalarWhereWithAggregatesInput | FabricanteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fabricante"> | number
    nome?: StringWithAggregatesFilter<"Fabricante"> | string
    paisOrigem?: StringWithAggregatesFilter<"Fabricante"> | string
    anoFundacao?: IntWithAggregatesFilter<"Fabricante"> | number
    tipo?: StringWithAggregatesFilter<"Fabricante"> | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nome?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    licencaEsp?: StringFilter<"Cliente"> | string
    testes?: TesteListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    licencaEsp?: SortOrder
    testes?: TesteOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    licencaEsp?: StringFilter<"Cliente"> | string
    testes?: TesteListRelationFilter
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    licencaEsp?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    licencaEsp?: StringWithAggregatesFilter<"Cliente"> | string
  }

  export type TesteWhereInput = {
    AND?: TesteWhereInput | TesteWhereInput[]
    OR?: TesteWhereInput[]
    NOT?: TesteWhereInput | TesteWhereInput[]
    id?: IntFilter<"Teste"> | number
    data?: DateTimeFilter<"Teste"> | Date | string
    resultado?: StringFilter<"Teste"> | string
    clienteId?: IntFilter<"Teste"> | number
    armaId?: IntFilter<"Teste"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    arma?: XOR<ArmaScalarRelationFilter, ArmaWhereInput>
  }

  export type TesteOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    resultado?: SortOrder
    clienteId?: SortOrder
    armaId?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    arma?: ArmaOrderByWithRelationInput
  }

  export type TesteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TesteWhereInput | TesteWhereInput[]
    OR?: TesteWhereInput[]
    NOT?: TesteWhereInput | TesteWhereInput[]
    data?: DateTimeFilter<"Teste"> | Date | string
    resultado?: StringFilter<"Teste"> | string
    clienteId?: IntFilter<"Teste"> | number
    armaId?: IntFilter<"Teste"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    arma?: XOR<ArmaScalarRelationFilter, ArmaWhereInput>
  }, "id">

  export type TesteOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    resultado?: SortOrder
    clienteId?: SortOrder
    armaId?: SortOrder
    _count?: TesteCountOrderByAggregateInput
    _avg?: TesteAvgOrderByAggregateInput
    _max?: TesteMaxOrderByAggregateInput
    _min?: TesteMinOrderByAggregateInput
    _sum?: TesteSumOrderByAggregateInput
  }

  export type TesteScalarWhereWithAggregatesInput = {
    AND?: TesteScalarWhereWithAggregatesInput | TesteScalarWhereWithAggregatesInput[]
    OR?: TesteScalarWhereWithAggregatesInput[]
    NOT?: TesteScalarWhereWithAggregatesInput | TesteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teste"> | number
    data?: DateTimeWithAggregatesFilter<"Teste"> | Date | string
    resultado?: StringWithAggregatesFilter<"Teste"> | string
    clienteId?: IntWithAggregatesFilter<"Teste"> | number
    armaId?: IntWithAggregatesFilter<"Teste"> | number
  }

  export type ArmaCreateInput = {
    nome: string
    calibre: string
    numDesparos: number
    fabricante: FabricanteCreateNestedOneWithoutArmaInput
    testes?: TesteCreateNestedManyWithoutArmaInput
  }

  export type ArmaUncheckedCreateInput = {
    id?: number
    nome: string
    calibre: string
    numDesparos: number
    fabricanteId: number
    testes?: TesteUncheckedCreateNestedManyWithoutArmaInput
  }

  export type ArmaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    calibre?: StringFieldUpdateOperationsInput | string
    numDesparos?: IntFieldUpdateOperationsInput | number
    fabricante?: FabricanteUpdateOneRequiredWithoutArmaNestedInput
    testes?: TesteUpdateManyWithoutArmaNestedInput
  }

  export type ArmaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    calibre?: StringFieldUpdateOperationsInput | string
    numDesparos?: IntFieldUpdateOperationsInput | number
    fabricanteId?: IntFieldUpdateOperationsInput | number
    testes?: TesteUncheckedUpdateManyWithoutArmaNestedInput
  }

  export type ArmaCreateManyInput = {
    id?: number
    nome: string
    calibre: string
    numDesparos: number
    fabricanteId: number
  }

  export type ArmaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    calibre?: StringFieldUpdateOperationsInput | string
    numDesparos?: IntFieldUpdateOperationsInput | number
  }

  export type ArmaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    calibre?: StringFieldUpdateOperationsInput | string
    numDesparos?: IntFieldUpdateOperationsInput | number
    fabricanteId?: IntFieldUpdateOperationsInput | number
  }

  export type FabricanteCreateInput = {
    nome: string
    paisOrigem: string
    anoFundacao: number
    tipo: string
    arma?: ArmaCreateNestedManyWithoutFabricanteInput
  }

  export type FabricanteUncheckedCreateInput = {
    id?: number
    nome: string
    paisOrigem: string
    anoFundacao: number
    tipo: string
    arma?: ArmaUncheckedCreateNestedManyWithoutFabricanteInput
  }

  export type FabricanteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    paisOrigem?: StringFieldUpdateOperationsInput | string
    anoFundacao?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    arma?: ArmaUpdateManyWithoutFabricanteNestedInput
  }

  export type FabricanteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    paisOrigem?: StringFieldUpdateOperationsInput | string
    anoFundacao?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    arma?: ArmaUncheckedUpdateManyWithoutFabricanteNestedInput
  }

  export type FabricanteCreateManyInput = {
    id?: number
    nome: string
    paisOrigem: string
    anoFundacao: number
    tipo: string
  }

  export type FabricanteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    paisOrigem?: StringFieldUpdateOperationsInput | string
    anoFundacao?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type FabricanteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    paisOrigem?: StringFieldUpdateOperationsInput | string
    anoFundacao?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteCreateInput = {
    nome: string
    email: string
    licencaEsp: string
    testes?: TesteCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    licencaEsp: string
    testes?: TesteUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    licencaEsp?: StringFieldUpdateOperationsInput | string
    testes?: TesteUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    licencaEsp?: StringFieldUpdateOperationsInput | string
    testes?: TesteUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nome: string
    email: string
    licencaEsp: string
  }

  export type ClienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    licencaEsp?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    licencaEsp?: StringFieldUpdateOperationsInput | string
  }

  export type TesteCreateInput = {
    data: Date | string
    resultado: string
    cliente: ClienteCreateNestedOneWithoutTestesInput
    arma: ArmaCreateNestedOneWithoutTestesInput
  }

  export type TesteUncheckedCreateInput = {
    id?: number
    data: Date | string
    resultado: string
    clienteId: number
    armaId: number
  }

  export type TesteUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutTestesNestedInput
    arma?: ArmaUpdateOneRequiredWithoutTestesNestedInput
  }

  export type TesteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    armaId?: IntFieldUpdateOperationsInput | number
  }

  export type TesteCreateManyInput = {
    id?: number
    data: Date | string
    resultado: string
    clienteId: number
    armaId: number
  }

  export type TesteUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: StringFieldUpdateOperationsInput | string
  }

  export type TesteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    armaId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FabricanteScalarRelationFilter = {
    is?: FabricanteWhereInput
    isNot?: FabricanteWhereInput
  }

  export type TesteListRelationFilter = {
    every?: TesteWhereInput
    some?: TesteWhereInput
    none?: TesteWhereInput
  }

  export type TesteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArmaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    calibre?: SortOrder
    numDesparos?: SortOrder
    fabricanteId?: SortOrder
  }

  export type ArmaAvgOrderByAggregateInput = {
    id?: SortOrder
    numDesparos?: SortOrder
    fabricanteId?: SortOrder
  }

  export type ArmaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    calibre?: SortOrder
    numDesparos?: SortOrder
    fabricanteId?: SortOrder
  }

  export type ArmaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    calibre?: SortOrder
    numDesparos?: SortOrder
    fabricanteId?: SortOrder
  }

  export type ArmaSumOrderByAggregateInput = {
    id?: SortOrder
    numDesparos?: SortOrder
    fabricanteId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ArmaListRelationFilter = {
    every?: ArmaWhereInput
    some?: ArmaWhereInput
    none?: ArmaWhereInput
  }

  export type ArmaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FabricanteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    paisOrigem?: SortOrder
    anoFundacao?: SortOrder
    tipo?: SortOrder
  }

  export type FabricanteAvgOrderByAggregateInput = {
    id?: SortOrder
    anoFundacao?: SortOrder
  }

  export type FabricanteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    paisOrigem?: SortOrder
    anoFundacao?: SortOrder
    tipo?: SortOrder
  }

  export type FabricanteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    paisOrigem?: SortOrder
    anoFundacao?: SortOrder
    tipo?: SortOrder
  }

  export type FabricanteSumOrderByAggregateInput = {
    id?: SortOrder
    anoFundacao?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    licencaEsp?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    licencaEsp?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    licencaEsp?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type ArmaScalarRelationFilter = {
    is?: ArmaWhereInput
    isNot?: ArmaWhereInput
  }

  export type TesteCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    resultado?: SortOrder
    clienteId?: SortOrder
    armaId?: SortOrder
  }

  export type TesteAvgOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    armaId?: SortOrder
  }

  export type TesteMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    resultado?: SortOrder
    clienteId?: SortOrder
    armaId?: SortOrder
  }

  export type TesteMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    resultado?: SortOrder
    clienteId?: SortOrder
    armaId?: SortOrder
  }

  export type TesteSumOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    armaId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FabricanteCreateNestedOneWithoutArmaInput = {
    create?: XOR<FabricanteCreateWithoutArmaInput, FabricanteUncheckedCreateWithoutArmaInput>
    connectOrCreate?: FabricanteCreateOrConnectWithoutArmaInput
    connect?: FabricanteWhereUniqueInput
  }

  export type TesteCreateNestedManyWithoutArmaInput = {
    create?: XOR<TesteCreateWithoutArmaInput, TesteUncheckedCreateWithoutArmaInput> | TesteCreateWithoutArmaInput[] | TesteUncheckedCreateWithoutArmaInput[]
    connectOrCreate?: TesteCreateOrConnectWithoutArmaInput | TesteCreateOrConnectWithoutArmaInput[]
    createMany?: TesteCreateManyArmaInputEnvelope
    connect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
  }

  export type TesteUncheckedCreateNestedManyWithoutArmaInput = {
    create?: XOR<TesteCreateWithoutArmaInput, TesteUncheckedCreateWithoutArmaInput> | TesteCreateWithoutArmaInput[] | TesteUncheckedCreateWithoutArmaInput[]
    connectOrCreate?: TesteCreateOrConnectWithoutArmaInput | TesteCreateOrConnectWithoutArmaInput[]
    createMany?: TesteCreateManyArmaInputEnvelope
    connect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FabricanteUpdateOneRequiredWithoutArmaNestedInput = {
    create?: XOR<FabricanteCreateWithoutArmaInput, FabricanteUncheckedCreateWithoutArmaInput>
    connectOrCreate?: FabricanteCreateOrConnectWithoutArmaInput
    upsert?: FabricanteUpsertWithoutArmaInput
    connect?: FabricanteWhereUniqueInput
    update?: XOR<XOR<FabricanteUpdateToOneWithWhereWithoutArmaInput, FabricanteUpdateWithoutArmaInput>, FabricanteUncheckedUpdateWithoutArmaInput>
  }

  export type TesteUpdateManyWithoutArmaNestedInput = {
    create?: XOR<TesteCreateWithoutArmaInput, TesteUncheckedCreateWithoutArmaInput> | TesteCreateWithoutArmaInput[] | TesteUncheckedCreateWithoutArmaInput[]
    connectOrCreate?: TesteCreateOrConnectWithoutArmaInput | TesteCreateOrConnectWithoutArmaInput[]
    upsert?: TesteUpsertWithWhereUniqueWithoutArmaInput | TesteUpsertWithWhereUniqueWithoutArmaInput[]
    createMany?: TesteCreateManyArmaInputEnvelope
    set?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    disconnect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    delete?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    connect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    update?: TesteUpdateWithWhereUniqueWithoutArmaInput | TesteUpdateWithWhereUniqueWithoutArmaInput[]
    updateMany?: TesteUpdateManyWithWhereWithoutArmaInput | TesteUpdateManyWithWhereWithoutArmaInput[]
    deleteMany?: TesteScalarWhereInput | TesteScalarWhereInput[]
  }

  export type TesteUncheckedUpdateManyWithoutArmaNestedInput = {
    create?: XOR<TesteCreateWithoutArmaInput, TesteUncheckedCreateWithoutArmaInput> | TesteCreateWithoutArmaInput[] | TesteUncheckedCreateWithoutArmaInput[]
    connectOrCreate?: TesteCreateOrConnectWithoutArmaInput | TesteCreateOrConnectWithoutArmaInput[]
    upsert?: TesteUpsertWithWhereUniqueWithoutArmaInput | TesteUpsertWithWhereUniqueWithoutArmaInput[]
    createMany?: TesteCreateManyArmaInputEnvelope
    set?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    disconnect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    delete?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    connect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    update?: TesteUpdateWithWhereUniqueWithoutArmaInput | TesteUpdateWithWhereUniqueWithoutArmaInput[]
    updateMany?: TesteUpdateManyWithWhereWithoutArmaInput | TesteUpdateManyWithWhereWithoutArmaInput[]
    deleteMany?: TesteScalarWhereInput | TesteScalarWhereInput[]
  }

  export type ArmaCreateNestedManyWithoutFabricanteInput = {
    create?: XOR<ArmaCreateWithoutFabricanteInput, ArmaUncheckedCreateWithoutFabricanteInput> | ArmaCreateWithoutFabricanteInput[] | ArmaUncheckedCreateWithoutFabricanteInput[]
    connectOrCreate?: ArmaCreateOrConnectWithoutFabricanteInput | ArmaCreateOrConnectWithoutFabricanteInput[]
    createMany?: ArmaCreateManyFabricanteInputEnvelope
    connect?: ArmaWhereUniqueInput | ArmaWhereUniqueInput[]
  }

  export type ArmaUncheckedCreateNestedManyWithoutFabricanteInput = {
    create?: XOR<ArmaCreateWithoutFabricanteInput, ArmaUncheckedCreateWithoutFabricanteInput> | ArmaCreateWithoutFabricanteInput[] | ArmaUncheckedCreateWithoutFabricanteInput[]
    connectOrCreate?: ArmaCreateOrConnectWithoutFabricanteInput | ArmaCreateOrConnectWithoutFabricanteInput[]
    createMany?: ArmaCreateManyFabricanteInputEnvelope
    connect?: ArmaWhereUniqueInput | ArmaWhereUniqueInput[]
  }

  export type ArmaUpdateManyWithoutFabricanteNestedInput = {
    create?: XOR<ArmaCreateWithoutFabricanteInput, ArmaUncheckedCreateWithoutFabricanteInput> | ArmaCreateWithoutFabricanteInput[] | ArmaUncheckedCreateWithoutFabricanteInput[]
    connectOrCreate?: ArmaCreateOrConnectWithoutFabricanteInput | ArmaCreateOrConnectWithoutFabricanteInput[]
    upsert?: ArmaUpsertWithWhereUniqueWithoutFabricanteInput | ArmaUpsertWithWhereUniqueWithoutFabricanteInput[]
    createMany?: ArmaCreateManyFabricanteInputEnvelope
    set?: ArmaWhereUniqueInput | ArmaWhereUniqueInput[]
    disconnect?: ArmaWhereUniqueInput | ArmaWhereUniqueInput[]
    delete?: ArmaWhereUniqueInput | ArmaWhereUniqueInput[]
    connect?: ArmaWhereUniqueInput | ArmaWhereUniqueInput[]
    update?: ArmaUpdateWithWhereUniqueWithoutFabricanteInput | ArmaUpdateWithWhereUniqueWithoutFabricanteInput[]
    updateMany?: ArmaUpdateManyWithWhereWithoutFabricanteInput | ArmaUpdateManyWithWhereWithoutFabricanteInput[]
    deleteMany?: ArmaScalarWhereInput | ArmaScalarWhereInput[]
  }

  export type ArmaUncheckedUpdateManyWithoutFabricanteNestedInput = {
    create?: XOR<ArmaCreateWithoutFabricanteInput, ArmaUncheckedCreateWithoutFabricanteInput> | ArmaCreateWithoutFabricanteInput[] | ArmaUncheckedCreateWithoutFabricanteInput[]
    connectOrCreate?: ArmaCreateOrConnectWithoutFabricanteInput | ArmaCreateOrConnectWithoutFabricanteInput[]
    upsert?: ArmaUpsertWithWhereUniqueWithoutFabricanteInput | ArmaUpsertWithWhereUniqueWithoutFabricanteInput[]
    createMany?: ArmaCreateManyFabricanteInputEnvelope
    set?: ArmaWhereUniqueInput | ArmaWhereUniqueInput[]
    disconnect?: ArmaWhereUniqueInput | ArmaWhereUniqueInput[]
    delete?: ArmaWhereUniqueInput | ArmaWhereUniqueInput[]
    connect?: ArmaWhereUniqueInput | ArmaWhereUniqueInput[]
    update?: ArmaUpdateWithWhereUniqueWithoutFabricanteInput | ArmaUpdateWithWhereUniqueWithoutFabricanteInput[]
    updateMany?: ArmaUpdateManyWithWhereWithoutFabricanteInput | ArmaUpdateManyWithWhereWithoutFabricanteInput[]
    deleteMany?: ArmaScalarWhereInput | ArmaScalarWhereInput[]
  }

  export type TesteCreateNestedManyWithoutClienteInput = {
    create?: XOR<TesteCreateWithoutClienteInput, TesteUncheckedCreateWithoutClienteInput> | TesteCreateWithoutClienteInput[] | TesteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TesteCreateOrConnectWithoutClienteInput | TesteCreateOrConnectWithoutClienteInput[]
    createMany?: TesteCreateManyClienteInputEnvelope
    connect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
  }

  export type TesteUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<TesteCreateWithoutClienteInput, TesteUncheckedCreateWithoutClienteInput> | TesteCreateWithoutClienteInput[] | TesteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TesteCreateOrConnectWithoutClienteInput | TesteCreateOrConnectWithoutClienteInput[]
    createMany?: TesteCreateManyClienteInputEnvelope
    connect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
  }

  export type TesteUpdateManyWithoutClienteNestedInput = {
    create?: XOR<TesteCreateWithoutClienteInput, TesteUncheckedCreateWithoutClienteInput> | TesteCreateWithoutClienteInput[] | TesteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TesteCreateOrConnectWithoutClienteInput | TesteCreateOrConnectWithoutClienteInput[]
    upsert?: TesteUpsertWithWhereUniqueWithoutClienteInput | TesteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: TesteCreateManyClienteInputEnvelope
    set?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    disconnect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    delete?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    connect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    update?: TesteUpdateWithWhereUniqueWithoutClienteInput | TesteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: TesteUpdateManyWithWhereWithoutClienteInput | TesteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: TesteScalarWhereInput | TesteScalarWhereInput[]
  }

  export type TesteUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<TesteCreateWithoutClienteInput, TesteUncheckedCreateWithoutClienteInput> | TesteCreateWithoutClienteInput[] | TesteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TesteCreateOrConnectWithoutClienteInput | TesteCreateOrConnectWithoutClienteInput[]
    upsert?: TesteUpsertWithWhereUniqueWithoutClienteInput | TesteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: TesteCreateManyClienteInputEnvelope
    set?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    disconnect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    delete?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    connect?: TesteWhereUniqueInput | TesteWhereUniqueInput[]
    update?: TesteUpdateWithWhereUniqueWithoutClienteInput | TesteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: TesteUpdateManyWithWhereWithoutClienteInput | TesteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: TesteScalarWhereInput | TesteScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutTestesInput = {
    create?: XOR<ClienteCreateWithoutTestesInput, ClienteUncheckedCreateWithoutTestesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutTestesInput
    connect?: ClienteWhereUniqueInput
  }

  export type ArmaCreateNestedOneWithoutTestesInput = {
    create?: XOR<ArmaCreateWithoutTestesInput, ArmaUncheckedCreateWithoutTestesInput>
    connectOrCreate?: ArmaCreateOrConnectWithoutTestesInput
    connect?: ArmaWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClienteUpdateOneRequiredWithoutTestesNestedInput = {
    create?: XOR<ClienteCreateWithoutTestesInput, ClienteUncheckedCreateWithoutTestesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutTestesInput
    upsert?: ClienteUpsertWithoutTestesInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutTestesInput, ClienteUpdateWithoutTestesInput>, ClienteUncheckedUpdateWithoutTestesInput>
  }

  export type ArmaUpdateOneRequiredWithoutTestesNestedInput = {
    create?: XOR<ArmaCreateWithoutTestesInput, ArmaUncheckedCreateWithoutTestesInput>
    connectOrCreate?: ArmaCreateOrConnectWithoutTestesInput
    upsert?: ArmaUpsertWithoutTestesInput
    connect?: ArmaWhereUniqueInput
    update?: XOR<XOR<ArmaUpdateToOneWithWhereWithoutTestesInput, ArmaUpdateWithoutTestesInput>, ArmaUncheckedUpdateWithoutTestesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FabricanteCreateWithoutArmaInput = {
    nome: string
    paisOrigem: string
    anoFundacao: number
    tipo: string
  }

  export type FabricanteUncheckedCreateWithoutArmaInput = {
    id?: number
    nome: string
    paisOrigem: string
    anoFundacao: number
    tipo: string
  }

  export type FabricanteCreateOrConnectWithoutArmaInput = {
    where: FabricanteWhereUniqueInput
    create: XOR<FabricanteCreateWithoutArmaInput, FabricanteUncheckedCreateWithoutArmaInput>
  }

  export type TesteCreateWithoutArmaInput = {
    data: Date | string
    resultado: string
    cliente: ClienteCreateNestedOneWithoutTestesInput
  }

  export type TesteUncheckedCreateWithoutArmaInput = {
    id?: number
    data: Date | string
    resultado: string
    clienteId: number
  }

  export type TesteCreateOrConnectWithoutArmaInput = {
    where: TesteWhereUniqueInput
    create: XOR<TesteCreateWithoutArmaInput, TesteUncheckedCreateWithoutArmaInput>
  }

  export type TesteCreateManyArmaInputEnvelope = {
    data: TesteCreateManyArmaInput | TesteCreateManyArmaInput[]
    skipDuplicates?: boolean
  }

  export type FabricanteUpsertWithoutArmaInput = {
    update: XOR<FabricanteUpdateWithoutArmaInput, FabricanteUncheckedUpdateWithoutArmaInput>
    create: XOR<FabricanteCreateWithoutArmaInput, FabricanteUncheckedCreateWithoutArmaInput>
    where?: FabricanteWhereInput
  }

  export type FabricanteUpdateToOneWithWhereWithoutArmaInput = {
    where?: FabricanteWhereInput
    data: XOR<FabricanteUpdateWithoutArmaInput, FabricanteUncheckedUpdateWithoutArmaInput>
  }

  export type FabricanteUpdateWithoutArmaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    paisOrigem?: StringFieldUpdateOperationsInput | string
    anoFundacao?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type FabricanteUncheckedUpdateWithoutArmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    paisOrigem?: StringFieldUpdateOperationsInput | string
    anoFundacao?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type TesteUpsertWithWhereUniqueWithoutArmaInput = {
    where: TesteWhereUniqueInput
    update: XOR<TesteUpdateWithoutArmaInput, TesteUncheckedUpdateWithoutArmaInput>
    create: XOR<TesteCreateWithoutArmaInput, TesteUncheckedCreateWithoutArmaInput>
  }

  export type TesteUpdateWithWhereUniqueWithoutArmaInput = {
    where: TesteWhereUniqueInput
    data: XOR<TesteUpdateWithoutArmaInput, TesteUncheckedUpdateWithoutArmaInput>
  }

  export type TesteUpdateManyWithWhereWithoutArmaInput = {
    where: TesteScalarWhereInput
    data: XOR<TesteUpdateManyMutationInput, TesteUncheckedUpdateManyWithoutArmaInput>
  }

  export type TesteScalarWhereInput = {
    AND?: TesteScalarWhereInput | TesteScalarWhereInput[]
    OR?: TesteScalarWhereInput[]
    NOT?: TesteScalarWhereInput | TesteScalarWhereInput[]
    id?: IntFilter<"Teste"> | number
    data?: DateTimeFilter<"Teste"> | Date | string
    resultado?: StringFilter<"Teste"> | string
    clienteId?: IntFilter<"Teste"> | number
    armaId?: IntFilter<"Teste"> | number
  }

  export type ArmaCreateWithoutFabricanteInput = {
    nome: string
    calibre: string
    numDesparos: number
    testes?: TesteCreateNestedManyWithoutArmaInput
  }

  export type ArmaUncheckedCreateWithoutFabricanteInput = {
    id?: number
    nome: string
    calibre: string
    numDesparos: number
    testes?: TesteUncheckedCreateNestedManyWithoutArmaInput
  }

  export type ArmaCreateOrConnectWithoutFabricanteInput = {
    where: ArmaWhereUniqueInput
    create: XOR<ArmaCreateWithoutFabricanteInput, ArmaUncheckedCreateWithoutFabricanteInput>
  }

  export type ArmaCreateManyFabricanteInputEnvelope = {
    data: ArmaCreateManyFabricanteInput | ArmaCreateManyFabricanteInput[]
    skipDuplicates?: boolean
  }

  export type ArmaUpsertWithWhereUniqueWithoutFabricanteInput = {
    where: ArmaWhereUniqueInput
    update: XOR<ArmaUpdateWithoutFabricanteInput, ArmaUncheckedUpdateWithoutFabricanteInput>
    create: XOR<ArmaCreateWithoutFabricanteInput, ArmaUncheckedCreateWithoutFabricanteInput>
  }

  export type ArmaUpdateWithWhereUniqueWithoutFabricanteInput = {
    where: ArmaWhereUniqueInput
    data: XOR<ArmaUpdateWithoutFabricanteInput, ArmaUncheckedUpdateWithoutFabricanteInput>
  }

  export type ArmaUpdateManyWithWhereWithoutFabricanteInput = {
    where: ArmaScalarWhereInput
    data: XOR<ArmaUpdateManyMutationInput, ArmaUncheckedUpdateManyWithoutFabricanteInput>
  }

  export type ArmaScalarWhereInput = {
    AND?: ArmaScalarWhereInput | ArmaScalarWhereInput[]
    OR?: ArmaScalarWhereInput[]
    NOT?: ArmaScalarWhereInput | ArmaScalarWhereInput[]
    id?: IntFilter<"Arma"> | number
    nome?: StringFilter<"Arma"> | string
    calibre?: StringFilter<"Arma"> | string
    numDesparos?: IntFilter<"Arma"> | number
    fabricanteId?: IntFilter<"Arma"> | number
  }

  export type TesteCreateWithoutClienteInput = {
    data: Date | string
    resultado: string
    arma: ArmaCreateNestedOneWithoutTestesInput
  }

  export type TesteUncheckedCreateWithoutClienteInput = {
    id?: number
    data: Date | string
    resultado: string
    armaId: number
  }

  export type TesteCreateOrConnectWithoutClienteInput = {
    where: TesteWhereUniqueInput
    create: XOR<TesteCreateWithoutClienteInput, TesteUncheckedCreateWithoutClienteInput>
  }

  export type TesteCreateManyClienteInputEnvelope = {
    data: TesteCreateManyClienteInput | TesteCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type TesteUpsertWithWhereUniqueWithoutClienteInput = {
    where: TesteWhereUniqueInput
    update: XOR<TesteUpdateWithoutClienteInput, TesteUncheckedUpdateWithoutClienteInput>
    create: XOR<TesteCreateWithoutClienteInput, TesteUncheckedCreateWithoutClienteInput>
  }

  export type TesteUpdateWithWhereUniqueWithoutClienteInput = {
    where: TesteWhereUniqueInput
    data: XOR<TesteUpdateWithoutClienteInput, TesteUncheckedUpdateWithoutClienteInput>
  }

  export type TesteUpdateManyWithWhereWithoutClienteInput = {
    where: TesteScalarWhereInput
    data: XOR<TesteUpdateManyMutationInput, TesteUncheckedUpdateManyWithoutClienteInput>
  }

  export type ClienteCreateWithoutTestesInput = {
    nome: string
    email: string
    licencaEsp: string
  }

  export type ClienteUncheckedCreateWithoutTestesInput = {
    id?: number
    nome: string
    email: string
    licencaEsp: string
  }

  export type ClienteCreateOrConnectWithoutTestesInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutTestesInput, ClienteUncheckedCreateWithoutTestesInput>
  }

  export type ArmaCreateWithoutTestesInput = {
    nome: string
    calibre: string
    numDesparos: number
    fabricante: FabricanteCreateNestedOneWithoutArmaInput
  }

  export type ArmaUncheckedCreateWithoutTestesInput = {
    id?: number
    nome: string
    calibre: string
    numDesparos: number
    fabricanteId: number
  }

  export type ArmaCreateOrConnectWithoutTestesInput = {
    where: ArmaWhereUniqueInput
    create: XOR<ArmaCreateWithoutTestesInput, ArmaUncheckedCreateWithoutTestesInput>
  }

  export type ClienteUpsertWithoutTestesInput = {
    update: XOR<ClienteUpdateWithoutTestesInput, ClienteUncheckedUpdateWithoutTestesInput>
    create: XOR<ClienteCreateWithoutTestesInput, ClienteUncheckedCreateWithoutTestesInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutTestesInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutTestesInput, ClienteUncheckedUpdateWithoutTestesInput>
  }

  export type ClienteUpdateWithoutTestesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    licencaEsp?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateWithoutTestesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    licencaEsp?: StringFieldUpdateOperationsInput | string
  }

  export type ArmaUpsertWithoutTestesInput = {
    update: XOR<ArmaUpdateWithoutTestesInput, ArmaUncheckedUpdateWithoutTestesInput>
    create: XOR<ArmaCreateWithoutTestesInput, ArmaUncheckedCreateWithoutTestesInput>
    where?: ArmaWhereInput
  }

  export type ArmaUpdateToOneWithWhereWithoutTestesInput = {
    where?: ArmaWhereInput
    data: XOR<ArmaUpdateWithoutTestesInput, ArmaUncheckedUpdateWithoutTestesInput>
  }

  export type ArmaUpdateWithoutTestesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    calibre?: StringFieldUpdateOperationsInput | string
    numDesparos?: IntFieldUpdateOperationsInput | number
    fabricante?: FabricanteUpdateOneRequiredWithoutArmaNestedInput
  }

  export type ArmaUncheckedUpdateWithoutTestesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    calibre?: StringFieldUpdateOperationsInput | string
    numDesparos?: IntFieldUpdateOperationsInput | number
    fabricanteId?: IntFieldUpdateOperationsInput | number
  }

  export type TesteCreateManyArmaInput = {
    id?: number
    data: Date | string
    resultado: string
    clienteId: number
  }

  export type TesteUpdateWithoutArmaInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutTestesNestedInput
  }

  export type TesteUncheckedUpdateWithoutArmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type TesteUncheckedUpdateManyWithoutArmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type ArmaCreateManyFabricanteInput = {
    id?: number
    nome: string
    calibre: string
    numDesparos: number
  }

  export type ArmaUpdateWithoutFabricanteInput = {
    nome?: StringFieldUpdateOperationsInput | string
    calibre?: StringFieldUpdateOperationsInput | string
    numDesparos?: IntFieldUpdateOperationsInput | number
    testes?: TesteUpdateManyWithoutArmaNestedInput
  }

  export type ArmaUncheckedUpdateWithoutFabricanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    calibre?: StringFieldUpdateOperationsInput | string
    numDesparos?: IntFieldUpdateOperationsInput | number
    testes?: TesteUncheckedUpdateManyWithoutArmaNestedInput
  }

  export type ArmaUncheckedUpdateManyWithoutFabricanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    calibre?: StringFieldUpdateOperationsInput | string
    numDesparos?: IntFieldUpdateOperationsInput | number
  }

  export type TesteCreateManyClienteInput = {
    id?: number
    data: Date | string
    resultado: string
    armaId: number
  }

  export type TesteUpdateWithoutClienteInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: StringFieldUpdateOperationsInput | string
    arma?: ArmaUpdateOneRequiredWithoutTestesNestedInput
  }

  export type TesteUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: StringFieldUpdateOperationsInput | string
    armaId?: IntFieldUpdateOperationsInput | number
  }

  export type TesteUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: StringFieldUpdateOperationsInput | string
    armaId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}