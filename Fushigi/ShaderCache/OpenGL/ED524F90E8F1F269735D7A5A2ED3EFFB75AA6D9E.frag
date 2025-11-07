#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_fragment_shader_interlock : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 9, std140) uniform _fp_c8
{
    precise vec4 data[4096];
} fp_c8;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_36;
layout (binding = 2) uniform sampler2D fp_t_tcb_24;
layout (binding = 3) uniform sampler2D fp_t_tcb_22;
layout (binding = 4) uniform sampler2D fp_t_tcb_1E;
layout (binding = 5) uniform sampler2D fp_t_tcb_28;
layout (binding = 6) uniform sampler2D fp_t_tcb_20;
layout (binding = 7) uniform samplerCube fp_t_tcb_16;
layout (binding = 8) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 9) uniform samplerCube fp_t_tcb_18;
layout (binding = 10) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 6) in vec4 in_attr6;
layout (location = 8) in vec4 in_attr8;
layout (location = 9) in vec4 in_attr9;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise vec2 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise vec3 temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise vec3 temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise vec4 temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise vec3 temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise vec3 temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    uint temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    int temp_196;
    int temp_197;
    uint temp_198;
    uint temp_199;
    int temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    bool temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    precise float temp_281;
    precise float temp_282;
    precise float temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    precise float temp_287;
    precise float temp_288;
    precise float temp_289;
    precise float temp_290;
    precise float temp_291;
    precise float temp_292;
    precise float temp_293;
    precise float temp_294;
    precise float temp_295;
    precise float temp_296;
    precise float temp_297;
    precise float temp_298;
    precise float temp_299;
    precise float temp_300;
    precise float temp_301;
    int temp_302;
    bool temp_303;
    int temp_304;
    int temp_305;
    int temp_306;
    int temp_307;
    uint temp_308;
    uint temp_309;
    int temp_310;
    precise float temp_311;
    int temp_312;
    int temp_313;
    uint temp_314;
    uint temp_315;
    int temp_316;
    precise float temp_317;
    int temp_318;
    uint temp_319;
    int temp_320;
    precise float temp_321;
    int temp_322;
    uint temp_323;
    uint temp_324;
    int temp_325;
    precise float temp_326;
    int temp_327;
    uint temp_328;
    int temp_329;
    precise float temp_330;
    int temp_331;
    uint temp_332;
    uint temp_333;
    int temp_334;
    precise float temp_335;
    int temp_336;
    uint temp_337;
    int temp_338;
    precise float temp_339;
    precise float temp_340;
    precise float temp_341;
    precise float temp_342;
    precise float temp_343;
    precise float temp_344;
    precise float temp_345;
    precise float temp_346;
    precise float temp_347;
    precise float temp_348;
    precise float temp_349;
    precise float temp_350;
    precise float temp_351;
    precise float temp_352;
    precise float temp_353;
    precise float temp_354;
    precise float temp_355;
    precise float temp_356;
    precise float temp_357;
    precise float temp_358;
    precise float temp_359;
    int temp_360;
    uint temp_361;
    uint temp_362;
    int temp_363;
    precise float temp_364;
    precise float temp_365;
    precise float temp_366;
    int temp_367;
    uint temp_368;
    uint temp_369;
    int temp_370;
    precise float temp_371;
    int temp_372;
    uint temp_373;
    int temp_374;
    precise float temp_375;
    precise float temp_376;
    precise float temp_377;
    precise float temp_378;
    precise float temp_379;
    precise float temp_380;
    int temp_381;
    uint temp_382;
    uint temp_383;
    int temp_384;
    precise float temp_385;
    int temp_386;
    uint temp_387;
    int temp_388;
    precise float temp_389;
    precise float temp_390;
    precise float temp_391;
    precise float temp_392;
    precise float temp_393;
    precise float temp_394;
    precise float temp_395;
    precise float temp_396;
    precise float temp_397;
    precise float temp_398;
    precise float temp_399;
    precise float temp_400;
    uint temp_401;
    int temp_402;
    bool temp_403;
    uint temp_404;
    precise float temp_405;
    precise float temp_406;
    precise float temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    precise float temp_411;
    uint temp_412;
    precise float temp_413;
    bool temp_414;
    precise float temp_415;
    precise float temp_416;
    precise float temp_417;
    precise float temp_418;
    precise float temp_419;
    precise float temp_420;
    precise float temp_421;
    precise float temp_422;
    precise float temp_423;
    precise float temp_424;
    precise float temp_425;
    precise float temp_426;
    precise float temp_427;
    precise float temp_428;
    precise float temp_429;
    precise float temp_430;
    precise float temp_431;
    precise float temp_432;
    precise float temp_433;
    precise float temp_434;
    precise float temp_435;
    precise float temp_436;
    precise float temp_437;
    precise float temp_438;
    precise float temp_439;
    precise float temp_440;
    precise float temp_441;
    precise float temp_442;
    precise float temp_443;
    precise float temp_444;
    precise float temp_445;
    precise float temp_446;
    int temp_447;
    uint temp_448;
    uint temp_449;
    int temp_450;
    precise float temp_451;
    precise float temp_452;
    uint temp_453;
    uint temp_454;
    int temp_455;
    precise float temp_456;
    int temp_457;
    uint temp_458;
    int temp_459;
    precise float temp_460;
    int temp_461;
    uint temp_462;
    uint temp_463;
    int temp_464;
    precise float temp_465;
    precise float temp_466;
    precise float temp_467;
    precise float temp_468;
    precise float temp_469;
    precise float temp_470;
    precise float temp_471;
    precise float temp_472;
    precise float temp_473;
    precise float temp_474;
    precise float temp_475;
    precise float temp_476;
    precise float temp_477;
    precise float temp_478;
    precise float temp_479;
    precise float temp_480;
    precise float temp_481;
    precise float temp_482;
    precise float temp_483;
    precise float temp_484;
    precise float temp_485;
    precise float temp_486;
    precise float temp_487;
    precise float temp_488;
    precise float temp_489;
    precise float temp_490;
    precise float temp_491;
    precise float temp_492;
    precise float temp_493;
    precise float temp_494;
    precise float temp_495;
    precise float temp_496;
    precise float temp_497;
    precise float temp_498;
    precise float temp_499;
    precise float temp_500;
    precise float temp_501;
    precise float temp_502;
    precise float temp_503;
    precise float temp_504;
    precise float temp_505;
    precise float temp_506;
    precise float temp_507;
    precise float temp_508;
    precise float temp_509;
    precise float temp_510;
    precise float temp_511;
    precise float temp_512;
    precise float temp_513;
    precise float temp_514;
    precise float temp_515;
    precise float temp_516;
    precise float temp_517;
    precise float temp_518;
    precise float temp_519;
    int temp_520;
    precise float temp_521;
    precise float temp_522;
    precise float temp_523;
    precise float temp_524;
    precise float temp_525;
    precise float temp_526;
    precise float temp_527;
    precise float temp_528;
    precise float temp_529;
    precise float temp_530;
    precise float temp_531;
    precise float temp_532;
    precise float temp_533;
    precise float temp_534;
    precise float temp_535;
    precise float temp_536;
    precise float temp_537;
    precise float temp_538;
    precise float temp_539;
    precise float temp_540;
    precise float temp_541;
    precise float temp_542;
    precise vec3 temp_543;
    precise float temp_544;
    precise float temp_545;
    precise float temp_546;
    precise float temp_547;
    precise vec3 temp_548;
    precise float temp_549;
    precise float temp_550;
    precise float temp_551;
    precise float temp_552;
    precise float temp_553;
    precise float temp_554;
    precise float temp_555;
    precise float temp_556;
    precise float temp_557;
    precise vec3 temp_558;
    precise float temp_559;
    precise float temp_560;
    precise float temp_561;
    precise float temp_562;
    precise float temp_563;
    precise float temp_564;
    precise float temp_565;
    precise float temp_566;
    precise float temp_567;
    precise float temp_568;
    precise float temp_569;
    precise float temp_570;
    precise float temp_571;
    precise float temp_572;
    precise float temp_573;
    precise float temp_574;
    precise float temp_575;
    precise float temp_576;
    precise float temp_577;
    precise float temp_578;
    precise float temp_579;
    precise float temp_580;
    precise float temp_581;
    precise float temp_582;
    precise float temp_583;
    precise float temp_584;
    precise float temp_585;
    precise float temp_586;
    precise float temp_587;
    precise float temp_588;
    precise float temp_589;
    precise float temp_590;
    precise float temp_591;
    precise float temp_592;
    precise float temp_593;
    precise float temp_594;
    precise float temp_595;
    precise float temp_596;
    precise float temp_597;
    precise float temp_598;
    precise float temp_599;
    precise float temp_600;
    precise float temp_601;
    precise float temp_602;
    precise float temp_603;
    precise float temp_604;
    precise float temp_605;
    precise float temp_606;
    precise float temp_607;
    precise float temp_608;
    precise float temp_609;
    precise float temp_610;
    precise float temp_611;
    precise float temp_612;
    precise float temp_613;
    precise float temp_614;
    precise float temp_615;
    precise float temp_616;
    precise float temp_617;
    precise float temp_618;
    precise float temp_619;
    precise float temp_620;
    precise float temp_621;
    precise float temp_622;
    precise float temp_623;
    precise float temp_624;
    precise float temp_625;
    precise float temp_626;
    precise float temp_627;
    precise float temp_628;
    precise float temp_629;
    precise float temp_630;
    precise float temp_631;
    precise float temp_632;
    precise float temp_633;
    precise float temp_634;
    precise float temp_635;
    precise float temp_636;
    precise float temp_637;
    precise float temp_638;
    precise float temp_639;
    precise float temp_640;
    precise float temp_641;
    precise float temp_642;
    precise float temp_643;
    precise float temp_644;
    precise float temp_645;
    precise float temp_646;
    precise float temp_647;
    precise float temp_648;
    precise float temp_649;
    precise float temp_650;
    precise float temp_651;
    precise float temp_652;
    precise float temp_653;
    precise float temp_654;
    precise float temp_655;
    precise float temp_656;
    precise float temp_657;
    precise float temp_658;
    precise float temp_659;
    precise float temp_660;
    precise float temp_661;
    precise float temp_662;
    precise float temp_663;
    precise float temp_664;
    precise float temp_665;
    precise float temp_666;
    precise float temp_667;
    precise float temp_668;
    precise float temp_669;
    precise float temp_670;
    precise float temp_671;
    precise float temp_672;
    precise float temp_673;
    precise float temp_674;
    precise float temp_675;
    precise float temp_676;
    precise float temp_677;
    precise float temp_678;
    precise float temp_679;
    precise float temp_680;
    precise float temp_681;
    precise float temp_682;
    precise float temp_683;
    precise float temp_684;
    precise float temp_685;
    precise float temp_686;
    precise float temp_687;
    precise float temp_688;
    precise float temp_689;
    precise float temp_690;
    precise float temp_691;
    precise float temp_692;
    precise float temp_693;
    precise float temp_694;
    precise float temp_695;
    precise float temp_696;
    precise float temp_697;
    precise float temp_698;
    precise float temp_699;
    precise float temp_700;
    precise float temp_701;
    precise float temp_702;
    precise float temp_703;
    precise float temp_704;
    precise float temp_705;
    // 0x000008: 0x01040DF760C7F01A Mov32i
    // 0x000010: 0xE003FF87CFF7FF10 Ipa
    // 0x000018: 0x5080000000471010 Mufu
    // 0x000028: 0xE043FF8E0107FF0D Ipa
    temp_0 = in_attr6.x;
    // 0x000030: 0xE043FF8E4107FF0C Ipa
    temp_1 = in_attr6.y;
    // 0x000038: 0xD830026FF0C70D00 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xD824036110C70D2A Texs
    temp_5 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_6 = temp_5.x;
    temp_7 = temp_5.y;
    temp_8 = temp_5.z;
    // 0x000050: 0xD822024060C70D04 Texs
    temp_9 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyz;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    temp_12 = temp_9.z;
    // 0x000058: 0xE043FF8A0107FF02 Ipa
    temp_13 = in_attr2.x;
    // 0x000068: 0xE043FF8A4107FF03 Ipa
    temp_14 = in_attr2.y;
    // 0x000070: 0xE043FF890107FF09 Ipa
    temp_15 = in_attr1.x;
    // 0x000078: 0xE043FF8A8107FF07 Ipa
    temp_16 = in_attr2.z;
    // 0x000088: 0xE043FF894107FF0A Ipa
    temp_17 = in_attr1.y;
    // 0x000090: 0xE043FF880107FF12 Ipa
    temp_18 = in_attr0.x;
    // 0x000098: 0xE043FF898107FF0B Ipa
    temp_19 = in_attr1.z;
    // 0x0000A8: 0xE043FF884107FF13 Ipa
    temp_20 = in_attr0.y;
    // 0x0000B0: 0xE043FF888107FF15 Ipa
    temp_21 = in_attr0.z;
    // 0x0000B8: 0x5C68100000270208 Fmul
    temp_22 = temp_13 * temp_13;
    // 0x0000C8: 0x5C6810000097090F Fmul
    temp_23 = temp_15 * temp_15;
    // 0x0000D0: 0x5C68100001271216 Fmul
    temp_24 = temp_18 * temp_18;
    // 0x0000D8: 0x59A0040000370308 Ffma
    temp_25 = fma(temp_14, temp_14, temp_22);
    // 0x0000E8: 0x59A0078000A70A0E Ffma
    temp_26 = fma(temp_17, temp_17, temp_23);
    // 0x0000F0: 0x59A00B0001371316 Ffma
    temp_27 = fma(temp_20, temp_20, temp_24);
    // 0x0000F8: 0x59A0040000770708 Ffma
    temp_28 = fma(temp_16, temp_16, temp_25);
    // 0x000108: 0x5080000000570808 Mufu
    temp_29 = inversesqrt(temp_28);
    // 0x000110: 0x59A0070000B70B0E Ffma
    temp_30 = fma(temp_19, temp_19, temp_26);
    // 0x000118: 0x5080000000570E14 Mufu
    temp_31 = inversesqrt(temp_30);
    // 0x000128: 0x59A00B0001571516 Ffma
    temp_32 = fma(temp_21, temp_21, temp_27);
    // 0x000130: 0x5C68100000870202 Fmul
    temp_33 = temp_13 * temp_29;
    // 0x000138: 0x5C68100000870303 Fmul
    temp_34 = temp_14 * temp_29;
    // 0x000148: 0x5C68100000870707 Fmul
    temp_35 = temp_16 * temp_29;
    // 0x000150: 0x5080000000571608 Mufu
    temp_36 = inversesqrt(temp_32);
    // 0x000158: 0x5C68100001470909 Fmul
    temp_37 = temp_15 * temp_31;
    // 0x000168: 0x5C68100001470A0A Fmul
    temp_38 = temp_17 * temp_31;
    // 0x000170: 0x5C68100001470B0B Fmul
    temp_39 = temp_19 * temp_31;
    // 0x000178: 0x5C6810000087130E Fmul
    temp_40 = temp_20 * temp_36;
    // 0x000188: 0x0103F8000007F013 Mov32i
    // 0x000190: 0xF0F0000034270000 Depbar
    // 0x000198: 0x5C6810000017010F Fmul
    temp_41 = temp_4 * temp_4;
    // 0x0001A8: 0x5C68100000170202 Fmul
    temp_42 = temp_33 * temp_4;
    // 0x0001B0: 0x5C68100000170303 Fmul
    temp_43 = temp_34 * temp_4;
    // 0x0001B8: 0x5C68100000170701 Fmul
    temp_44 = temp_35 * temp_4;
    // 0x0001C8: 0x59A007800007000F Ffma
    temp_45 = fma(temp_3, temp_3, temp_41);
    // 0x0001D0: 0x59A0010000070902 Ffma
    temp_46 = fma(temp_37, temp_3, temp_42);
    // 0x0001D8: 0x5C68100000871209 Fmul
    temp_47 = temp_18 * temp_36;
    // 0x0001E8: 0x59A0018000070A03 Ffma
    temp_48 = fma(temp_38, temp_3, temp_43);
    // 0x0001F0: 0xE003FF874FF7FF0A Ipa
    temp_49 = gl_FragCoord.y;
    temp_50 = support_buffer.render_scale[0];
    temp_51 = temp_49 / temp_50;
    // 0x0001F8: 0x59A0008000070B01 Ffma
    temp_52 = fma(temp_39, temp_3, temp_44);
    // 0x000208: 0x5C68100000871508 Fmul
    temp_53 = temp_21 * temp_36;
    // 0x000210: 0x385D103F80070F0F Fadd
    temp_54 = 0.0 - temp_45;
    temp_55 = temp_54 + 1.0;
    temp_56 = clamp(temp_55, 0.0, 1.0);
    // 0x000218: 0x5080000000870F0F Mufu
    temp_57 = sqrt(temp_56);
    // 0x000228: 0x59A0010000F70902 Ffma
    temp_58 = fma(temp_47, temp_57, temp_46);
    // 0x000230: 0xE003FF870FF7FF09 Ipa
    temp_59 = gl_FragCoord.x;
    temp_60 = support_buffer.render_scale[0];
    temp_61 = temp_59 / temp_60;
    // 0x000238: 0x59A0018000F70E03 Ffma
    temp_62 = fma(temp_40, temp_57, temp_48);
    // 0x000248: 0x59A0008000F70801 Ffma
    temp_63 = fma(temp_53, temp_57, temp_52);
    // 0x000250: 0x5C68100000270200 Fmul
    temp_64 = temp_58 * temp_58;
    // 0x000258: 0x59A0000000370300 Ffma
    temp_65 = fma(temp_62, temp_62, temp_64);
    // 0x000268: 0x59A0000000170107 Ffma
    temp_66 = fma(temp_63, temp_63, temp_65);
    // 0x000270: 0x5080000000570708 Mufu
    temp_67 = inversesqrt(temp_66);
    // 0x000278: 0x5C68100000870116 Fmul
    temp_68 = temp_63 * temp_67;
    // 0x000288: 0x5C68100000870300 Fmul
    temp_69 = temp_62 * temp_67;
    // 0x000290: 0x5C6810000087020E Fmul
    temp_70 = temp_58 * temp_67;
    // 0x000298: 0x4C68100C04A70908 Fmul
    temp_71 = temp_61 * fp_c3.data[18].z;
    // 0x0002A8: 0x4C68100C04B70A09 Fmul
    temp_72 = temp_51 * fp_c3.data[18].w;
    // 0x0002B0: 0x4C68100C00671603 Fmul
    temp_73 = temp_68 * fp_c3.data[1].z;
    // 0x0002B8: 0x4C68100C00271601 Fmul
    temp_74 = temp_68 * fp_c3.data[0].z;
    // 0x0002C8: 0x49A0018C00570003 Ffma
    temp_75 = fma(temp_69, fp_c3.data[1].y, temp_73);
    // 0x0002D0: 0x49A0008C00170001 Ffma
    temp_76 = fma(temp_69, fp_c3.data[0].y, temp_74);
    // 0x0002D8: 0x49A0018C00470E03 Ffma
    temp_77 = fma(temp_70, fp_c3.data[1].x, temp_75);
    // 0x0002E8: 0x49A0008C00070E01 Ffma
    temp_78 = fma(temp_70, fp_c3.data[0].x, temp_76);
    // 0x0002F0: 0x4C69100C03E70303 Fmul
    temp_79 = 0.0 - fp_c3.data[15].z;
    temp_80 = temp_77 * temp_79;
    // 0x0002F8: 0x4C68101808B70101 Fmul
    temp_81 = temp_78 * fp_c6.data[34].w;
    // 0x000308: 0x4C68101808B70303 Fmul
    temp_82 = temp_80 * fp_c6.data[34].w;
    // 0x000310: 0x49A0040400370122 Ffma
    temp_83 = fma(temp_81, fp_c1.data[0].w, temp_71);
    // 0x000318: 0x49A0048400370323 Ffma
    temp_84 = fma(temp_82, fp_c1.data[0].w, temp_72);
    // 0x000328: 0xD832022242372222 Texs
    temp_85 = texture(fp_t_tcb_22, vec2(temp_83, temp_84)).xyzw;
    temp_86 = temp_85.x;
    temp_87 = temp_85.y;
    temp_88 = temp_85.z;
    temp_89 = temp_85.w;
    // 0x000330: 0xD86201EFF1370813 Texs
    temp_90 = textureLod(fp_t_tcb_1E, vec2(temp_71, temp_72), 1.0).x;
    // 0x000338: 0xD822028140C70D0C Texs
    temp_91 = texture(fp_t_tcb_28, vec2(temp_0, temp_1)).xyz;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    // 0x000348: 0xD822020010970820 Texs
    temp_95 = texture(fp_t_tcb_20, vec2(temp_71, temp_72)).xyz;
    temp_96 = temp_95.x;
    temp_97 = temp_95.y;
    temp_98 = temp_95.z;
    // 0x000350: 0xE043FF8B0107FF19 Ipa
    temp_99 = in_attr3.x;
    // 0x000358: 0xE043FF8B4107FF12 Ipa
    temp_100 = in_attr3.y;
    // 0x000368: 0xE043FF8B8107FF18 Ipa
    temp_101 = in_attr3.z;
    // 0x000370: 0xF0F0000034370000 Depbar
    // 0x000378: 0x4C6810180A072A2A Fmul
    temp_102 = temp_6 * fp_c6.data[40].x;
    // 0x000388: 0xE2900000B9000000 Ssy
    // 0x000390: 0x0103F0000007F034 Mov32i
    // 0x000398: 0x386810418007081B Fmul
    temp_103 = temp_71 * 16.0;
    // 0x0003A8: 0x4C68101402C70404 Fmul
    temp_104 = temp_10 * fp_c5.data[11].x;
    // 0x0003B0: 0x5CA8148001B70A1B F2f
    temp_105 = floor(temp_103);
    // 0x0003B8: 0x4C68101402D70505 Fmul
    temp_106 = temp_11 * fp_c5.data[11].y;
    // 0x0003C8: 0x4C68101402E70606 Fmul
    temp_107 = temp_12 * fp_c5.data[11].z;
    // 0x0003D0: 0x4C9807980877001D Mov
    // 0x0003D8: 0x5C9807800FF70032 Mov
    // 0x0003E8: 0x5C9807800FF7002F Mov
    // 0x0003F0: 0x4C68101808A71D1D Fmul
    temp_108 = fp_c6.data[33].w * fp_c6.data[34].z;
    // 0x0003F8: 0x5C68100001971903 Fmul
    temp_109 = temp_99 * temp_99;
    // 0x000408: 0x59A0018001271203 Ffma
    temp_110 = fma(temp_100, temp_100, temp_109);
    // 0x000410: 0x59A0018001871803 Ffma
    temp_111 = fma(temp_101, temp_101, temp_110);
    // 0x000418: 0x5080000000570303 Mufu
    temp_112 = inversesqrt(temp_111);
    // 0x000428: 0x5C69100000371919 Fmul
    temp_113 = 0.0 - temp_112;
    temp_114 = temp_99 * temp_113;
    // 0x000430: 0x5C69100000371212 Fmul
    temp_115 = 0.0 - temp_112;
    temp_116 = temp_100 * temp_115;
    // 0x000438: 0x5C69100000371818 Fmul
    temp_117 = 0.0 - temp_112;
    temp_118 = temp_101 * temp_117;
    // 0x000448: 0x4C58301805C71902 Fadd
    temp_119 = 0.0 - fp_c6.data[23].x;
    temp_120 = temp_114 + temp_119;
    // 0x000450: 0x4C58301805D71207 Fadd
    temp_121 = 0.0 - fp_c6.data[23].y;
    temp_122 = temp_116 + temp_121;
    // 0x000458: 0x4C58301805E7180A Fadd
    temp_123 = 0.0 - fp_c6.data[23].z;
    temp_124 = temp_118 + temp_123;
    // 0x000468: 0x5C68100000270215 Fmul
    temp_125 = temp_120 * temp_120;
    // 0x000470: 0x59A00A8000770715 Ffma
    temp_126 = fma(temp_122, temp_122, temp_125);
    // 0x000478: 0x59A00A8000A70A15 Ffma
    temp_127 = fma(temp_124, temp_124, temp_126);
    // 0x000488: 0x5080000000571515 Mufu
    temp_128 = inversesqrt(temp_127);
    // 0x000490: 0x5C68100001570203 Fmul
    temp_129 = temp_120 * temp_128;
    // 0x000498: 0x5C68100001570707 Fmul
    temp_130 = temp_122 * temp_128;
    // 0x0004A8: 0x5C68100001570A0F Fmul
    temp_131 = temp_124 * temp_128;
    // 0x0004B0: 0x4C69101805C70302 Fmul
    temp_132 = 0.0 - fp_c6.data[23].x;
    temp_133 = temp_129 * temp_132;
    // 0x0004B8: 0x5C6810000037191C Fmul
    temp_134 = temp_114 * temp_129;
    // 0x0004C8: 0x49A1011805D70702 Ffma
    temp_135 = 0.0 - fp_c6.data[23].y;
    temp_136 = fma(temp_130, temp_135, temp_133);
    // 0x0004D0: 0x59A00E000077120A Ffma
    temp_137 = fma(temp_116, temp_130, temp_134);
    // 0x0004D8: 0x4C58301407B7061C Fadd
    temp_138 = 0.0 - fp_c5.data[30].w;
    temp_139 = temp_107 + temp_138;
    // 0x0004E8: 0x49A5011805E70F0B Ffma
    temp_140 = 0.0 - fp_c6.data[23].z;
    temp_141 = fma(temp_131, temp_140, temp_136);
    temp_142 = clamp(temp_141, 0.0, 1.0);
    // 0x0004F0: 0x59A4050000F71817 Ffma
    temp_143 = fma(temp_118, temp_131, temp_137);
    temp_144 = clamp(temp_143, 0.0, 1.0);
    // 0x0004F8: 0x5C68100000370E02 Fmul
    temp_145 = temp_70 * temp_129;
    // 0x000508: 0x4C69101805C70E03 Fmul
    temp_146 = 0.0 - fp_c6.data[23].x;
    temp_147 = temp_70 * temp_146;
    // 0x000510: 0x49A20D0400270B0A Ffma
    temp_148 = fma(temp_142, fp_c1.data[0].z, -6.98316002);
    // 0x000518: 0x49A20D040027171A Ffma
    temp_149 = fma(temp_144, fp_c1.data[0].z, -6.98316002);
    // 0x000528: 0x59A0010000770015 Ffma
    temp_150 = fma(temp_69, temp_130, temp_145);
    // 0x000530: 0x386013BF80072A02 Fmnmx
    temp_151 = min(temp_102, 1.0);
    // 0x000538: 0x5C68100000A70B0B Fmul
    temp_152 = temp_142 * temp_148;
    // 0x000548: 0x5C68100001A71707 Fmul
    temp_153 = temp_144 * temp_149;
    // 0x000550: 0x59A40A8000F71617 Ffma
    temp_154 = fma(temp_68, temp_131, temp_150);
    temp_155 = clamp(temp_154, 0.0, 1.0);
    // 0x000558: 0x4C60178400070202 Fmnmx
    temp_156 = max(temp_151, fp_c1.data[0].x);
    // 0x000568: 0x5C68100001970E0F Fmul
    temp_157 = temp_70 * temp_114;
    // 0x000570: 0x386810411007091A Fmul
    temp_158 = temp_72 * 9.0;
    // 0x000578: 0x5CA8148001A70A1A F2f
    temp_159 = floor(temp_158);
    // 0x000588: 0x5C90008000B7001E Rro
    // 0x000590: 0x51A4010400070236 Ffma
    temp_160 = fma(temp_156, temp_156, fp_c1.data[0].x);
    temp_161 = clamp(temp_160, 0.0, 1.0);
    // 0x000598: 0x5080000000271E1E Mufu
    temp_162 = exp2(temp_152);
    // 0x0005A8: 0x59A0078001270015 Ffma
    temp_163 = fma(temp_69, temp_116, temp_157);
    // 0x0005B0: 0x32A01A3F00070234 Ffma
    temp_164 = fma(temp_156, 0.5, 0.5);
    // 0x0005B8: 0x49A1019805D7000F Ffma
    temp_165 = 0.0 - fp_c6.data[23].y;
    temp_166 = fma(temp_69, temp_165, temp_147);
    // 0x0005C8: 0x5C9000800077002A Rro
    // 0x0005D0: 0x5C68100003673635 Fmul
    temp_167 = temp_161 * temp_161;
    // 0x0005D8: 0x5080000000272A2A Mufu
    temp_168 = exp2(temp_153);
    // 0x0005E8: 0x59A40A8001871603 Ffma
    temp_169 = fma(temp_68, temp_118, temp_163);
    temp_170 = clamp(temp_169, 0.0, 1.0);
    // 0x0005F0: 0x5C68120003473434 Fmul
    temp_171 = temp_164 * 0.5;
    temp_172 = temp_171 * temp_164;
    // 0x0005F8: 0x49A5079805E7160A Ffma
    temp_173 = 0.0 - fp_c6.data[23].z;
    temp_174 = fma(temp_68, temp_173, temp_166);
    temp_175 = clamp(temp_174, 0.0, 1.0);
    // 0x000608: 0x32A00DC180071A33 Ffma
    temp_176 = fma(temp_159, 16.0, temp_105);
    // 0x000610: 0x4C58301407B7051A Fadd
    temp_177 = 0.0 - fp_c5.data[30].w;
    temp_178 = temp_106 + temp_177;
    // 0x000618: 0x5CB0118003370A33 F2i
    temp_179 = trunc(temp_176);
    temp_180 = max(temp_179, 0.0);
    temp_181 = uint(temp_180);
    // 0x000628: 0x59A20B8003571715 Ffma
    temp_182 = 0.0 - temp_155;
    temp_183 = fma(temp_155, temp_167, temp_182);
    // 0x000630: 0x59A101800037340F Ffma
    temp_184 = 0.0 - temp_170;
    temp_185 = fma(temp_172, temp_184, temp_170);
    // 0x000638: 0x59A1050003470A09 Ffma
    temp_186 = 0.0 - temp_172;
    temp_187 = fma(temp_175, temp_186, temp_175);
    // 0x000648: 0x4C68101801470A0B Fmul
    temp_188 = temp_175 * fp_c6.data[5].x;
    // 0x000650: 0x51A00A8400171715 Ffma
    temp_189 = fma(temp_155, temp_183, fp_c1.data[0].y);
    // 0x000658: 0x5C58100000F7340F Fadd
    temp_190 = temp_172 + temp_185;
    // 0x000668: 0x5080000000471508 Mufu
    temp_191 = 1.0 / temp_189;
    // 0x000670: 0x5C58100000973409 Fadd
    temp_192 = temp_172 + temp_187;
    // 0x000678: 0x5080000000470F0F Mufu
    temp_193 = 1.0 / temp_190;
    // 0x000688: 0x1E23EA2F98370B1F Fmul32i
    temp_194 = temp_188 * 0.318309873;
    // 0x000690: 0x5080000000470917 Mufu
    temp_195 = 1.0 / temp_192;
    // 0x000698: 0x3848000000873326 Shl
    temp_196 = int(temp_181) << 8;
    // 0x0006A8: 0xEF94008200472626 Ldc
    temp_197 = temp_196 + 0x2004;
    temp_198 = uint(temp_197) >> 2;
    temp_199 = temp_198 >> 2;
    temp_200 = int(temp_198) & 3;
    temp_201 = fp_c8.data[int(temp_199)][temp_200];
    // 0x0006B0: 0x4C58301407B70409 Fadd
    temp_202 = 0.0 - fp_c5.data[30].w;
    temp_203 = temp_104 + temp_202;
    // 0x0006B8: 0x5C68100000873608 Fmul
    temp_204 = temp_161 * temp_191;
    // 0x0006C8: 0x3868103F00070F31 Fmul
    temp_205 = temp_193 * 0.5;
    // 0x0006D0: 0x4C68101801570A0F Fmul
    temp_206 = temp_175 * fp_c6.data[5].y;
    // 0x0006D8: 0x51A0049407B72B07 Ffma
    temp_207 = fma(temp_7, temp_203, fp_c5.data[30].w);
    // 0x0006E8: 0x5C68100000870808 Fmul
    temp_208 = temp_204 * temp_204;
    // 0x0006F0: 0x51A00E1407B72B09 Ffma
    temp_209 = fma(temp_7, temp_139, fp_c5.data[30].w);
    // 0x0006F8: 0x5C68100001773117 Fmul
    temp_210 = temp_205 * temp_195;
    // 0x000708: 0x1E23EA2F98370F28 Fmul32i
    temp_211 = temp_206 * 0.318309873;
    // 0x000710: 0x59A1150002A7071C Ffma
    temp_212 = 0.0 - temp_168;
    temp_213 = fma(temp_207, temp_212, temp_168);
    // 0x000718: 0x5C68100001770808 Fmul
    temp_214 = temp_208 * temp_210;
    // 0x000728: 0x5C58100001C7071C Fadd
    temp_215 = temp_207 + temp_213;
    // 0x000730: 0x5C68100000870A15 Fmul
    temp_216 = temp_175 * temp_214;
    // 0x000738: 0x4C68101801670A0A Fmul
    temp_217 = temp_175 * fp_c6.data[5].z;
    // 0x000748: 0x51A00D1407B72B08 Ffma
    temp_218 = fma(temp_7, temp_178, fp_c5.data[30].w);
    // 0x000750: 0x1E23EA2F98370A27 Fmul32i
    temp_219 = temp_217 * 0.318309873;
    // 0x000758: 0x59A10F0001E7070A Ffma
    temp_220 = 0.0 - temp_162;
    temp_221 = fma(temp_207, temp_220, temp_162);
    // 0x000768: 0x59A10F0001E7080B Ffma
    temp_222 = 0.0 - temp_162;
    temp_223 = fma(temp_218, temp_222, temp_162);
    // 0x000770: 0x59A10F0001E7091E Ffma
    temp_224 = 0.0 - temp_162;
    temp_225 = fma(temp_209, temp_224, temp_162);
    // 0x000778: 0x59A1150002A70817 Ffma
    temp_226 = 0.0 - temp_168;
    temp_227 = fma(temp_218, temp_226, temp_168);
    // 0x000788: 0x59A1150002A7092A Ffma
    temp_228 = 0.0 - temp_168;
    temp_229 = fma(temp_209, temp_228, temp_168);
    // 0x000790: 0x5C58100000A7070F Fadd
    temp_230 = temp_207 + temp_221;
    // 0x000798: 0x5C58100000B7081A Fadd
    temp_231 = temp_218 + temp_223;
    // 0x0007A8: 0x5C58100001E7091E Fadd
    temp_232 = temp_209 + temp_225;
    // 0x0007B0: 0x5C5810000177081B Fadd
    temp_233 = temp_218 + temp_227;
    // 0x0007B8: 0x5C58100002A7092A Fadd
    temp_234 = temp_209 + temp_229;
    // 0x0007C8: 0x5B6603800FF72607 Isetp
    temp_235 = floatBitsToUint(temp_201) <= 0u;
    // 0x0007D0: 0xF0F0000034170000 Depbar
    // 0x0007D8: 0x51A00E980147220A Ffma
    temp_236 = fma(temp_86, temp_108, fp_c6.data[5].x);
    // 0x0007E8: 0x51A00E980157230B Ffma
    temp_237 = fma(temp_87, temp_108, fp_c6.data[5].y);
    // 0x0007F0: 0x51A00E980167241D Ffma
    temp_238 = fma(temp_88, temp_108, fp_c6.data[5].z);
    // 0x0007F8: 0x4C68101403070C0C Fmul
    temp_239 = temp_92 * fp_c5.data[12].x;
    // 0x000808: 0x4C68101403170D0D Fmul
    temp_240 = temp_93 * fp_c5.data[12].y;
    // 0x000810: 0x4C68101403271414 Fmul
    temp_241 = temp_94 * fp_c5.data[12].z;
    // 0x000818: 0x5C68100000F70A17 Fmul
    temp_242 = temp_236 * temp_230;
    // 0x000828: 0x5C68100001A70B1A Fmul
    temp_243 = temp_237 * temp_231;
    // 0x000830: 0x5C68100001E71D1E Fmul
    temp_244 = temp_238 * temp_232;
    // 0x000838: 0x59A1140002871B0B Ffma
    temp_245 = 0.0 - temp_211;
    temp_246 = fma(temp_233, temp_245, temp_211);
    // 0x000848: 0x59A1138002772A0F Ffma
    temp_247 = 0.0 - temp_219;
    temp_248 = fma(temp_234, temp_247, temp_219);
    // 0x000850: 0x5C68100000370E27 Fmul
    temp_249 = temp_70 * temp_170;
    // 0x000858: 0x5C6810000177152D Fmul
    temp_250 = temp_216 * temp_242;
    // 0x000868: 0x5C68100001A7152E Fmul
    temp_251 = temp_216 * temp_243;
    // 0x000870: 0x5C68100001E71530 Fmul
    temp_252 = temp_216 * temp_244;
    // 0x000878: 0x51A5098400171115 Ffma
    temp_253 = 0.0 - temp_90;
    temp_254 = fma(temp_8, temp_253, fp_c1.data[0].y);
    temp_255 = clamp(temp_254, 0.0, 1.0);
    // 0x000888: 0x5C68100000370011 Fmul
    temp_256 = temp_69 * temp_170;
    // 0x000890: 0x5C6810000037161B Fmul
    temp_257 = temp_68 * temp_170;
    // 0x000898: 0x59A10F8001F71C0A Ffma
    temp_258 = 0.0 - temp_194;
    temp_259 = fma(temp_215, temp_258, temp_194);
    // 0x0008A8: 0x5C9807800FF70017 Mov
    // 0x0008B0: 0x5C9807800FF7001C Mov
    // 0x0008B8: 0x49A20A980AD7151E Ffma
    temp_260 = 0.0 - temp_255;
    temp_261 = fma(temp_255, fp_c6.data[43].y, temp_260);
    // 0x0008C8: 0x32A209400007111A Ffma
    temp_262 = 0.0 - temp_116;
    temp_263 = fma(temp_256, 2.0, temp_262);
    // 0x0008D0: 0x49A20A980AC71511 Ffma
    temp_264 = 0.0 - temp_255;
    temp_265 = fma(temp_255, fp_c6.data[43].x, temp_264);
    // 0x0008D8: 0x49A20A980AE71515 Ffma
    temp_266 = 0.0 - temp_255;
    temp_267 = fma(temp_255, fp_c6.data[43].z, temp_266);
    // 0x0008E8: 0x5C9807800FF7001D Mov
    // 0x0008F0: 0x5C9807800FF70013 Mov
    // 0x0008F8: 0x3858103F80071E2A Fadd
    temp_268 = temp_261 + 1.0;
    // 0x000908: 0x32A20CC000072727 Ffma
    temp_269 = 0.0 - temp_114;
    temp_270 = fma(temp_249, 2.0, temp_269);
    // 0x000910: 0x3858103F80071111 Fadd
    temp_271 = temp_265 + 1.0;
    // 0x000918: 0x3858103F80071515 Fadd
    temp_272 = temp_267 + 1.0;
    // 0x000928: 0x32A20C4000071B1B Ffma
    temp_273 = 0.0 - temp_118;
    temp_274 = fma(temp_257, 2.0, temp_273);
    // 0x000930: 0x4C68101808470C1E Fmul
    temp_275 = temp_239 * fp_c6.data[33].x;
    // 0x000938: 0x4C68101808470D1F Fmul
    temp_276 = temp_240 * fp_c6.data[33].x;
    // 0x000948: 0x4C68101808471428 Fmul
    temp_277 = temp_241 * fp_c6.data[33].x;
    // 0x000950: 0x59A4088001170429 Ffma
    temp_278 = fma(temp_104, temp_271, temp_271);
    temp_279 = clamp(temp_278, 0.0, 1.0);
    // 0x000958: 0x59A4150002A7052A Ffma
    temp_280 = fma(temp_106, temp_268, temp_268);
    temp_281 = clamp(temp_280, 0.0, 1.0);
    // 0x000968: 0x59A40A800157062C Ffma
    temp_282 = fma(temp_107, temp_272, temp_272);
    temp_283 = clamp(temp_282, 0.0, 1.0);
    // 0x000970: 0x1E23E22F98372D2D Fmul32i
    temp_284 = temp_250 * 0.159154937;
    // 0x000978: 0x1E23E22F98372E2E Fmul32i
    temp_285 = temp_251 * 0.159154937;
    // 0x000988: 0x1E23E22F98373030 Fmul32i
    temp_286 = temp_252 * 0.159154937;
    // 0x000990: 0xF0F800000000000F Sync
    temp_287 = 0.0;
    temp_288 = 0.0;
    temp_289 = 0.0;
    temp_290 = 0.0;
    temp_291 = 0.0;
    temp_292 = 0.0;
    temp_293 = 0.0;
    temp_294 = 0.0;
    temp_295 = 0.0;
    temp_296 = 0.0;
    temp_297 = 0.0;
    temp_298 = 0.0;
    if (!temp_235)
    {
        // 0x000998: 0x5C9807800FF7003C Mov
        // 0x0009A8: 0xE043FF8D0107FF3A Ipa
        temp_299 = in_attr5.x;
        // 0x0009B0: 0xE043FF8D4107FF37 Ipa
        temp_300 = in_attr5.y;
        // 0x0009B8: 0xE043FF8D8107FF39 Ipa
        temp_301 = in_attr5.z;
        temp_302 = 0;
        do
        {
            // 0x0009C8: 0x5C18020003C7333F Iscadd
            temp_304 = int(temp_181) << 4;
            temp_305 = temp_304 + temp_302;
            // 0x0009D0: 0xE290000052000000 Ssy
            // 0x0009D8: 0x3848000000473F3F Shl
            temp_306 = temp_305 << 4;
            // 0x0009E8: 0xEF94008200073F38 Ldc
            temp_307 = temp_306 + 0x2000;
            temp_308 = uint(temp_307) >> 2;
            temp_309 = temp_308 >> 2;
            temp_310 = int(temp_308) & 3;
            temp_311 = fp_c8.data[int(temp_309)][temp_310];
            // 0x0009F0: 0x3848000000673838 Shl
            temp_312 = floatBitsToInt(temp_311) << 6;
            // 0x0009F8: 0xEF9500800107380C Ldc
            temp_313 = temp_312 + 16;
            temp_314 = uint(temp_313) >> 2;
            temp_315 = temp_314 >> 2;
            temp_316 = int(temp_314) & 3;
            temp_317 = fp_c8.data[int(temp_315)][temp_316];
            temp_318 = int(temp_314) + 1;
            temp_319 = uint(temp_318) >> 2;
            temp_320 = temp_318 & 3;
            temp_321 = fp_c8.data[int(temp_319)][temp_320];
            // 0x000A08: 0xEF95008001873810 Ldc
            temp_322 = temp_312 + 24;
            temp_323 = uint(temp_322) >> 2;
            temp_324 = temp_323 >> 2;
            temp_325 = int(temp_323) & 3;
            temp_326 = fp_c8.data[int(temp_324)][temp_325];
            temp_327 = int(temp_323) + 1;
            temp_328 = uint(temp_327) >> 2;
            temp_329 = temp_327 & 3;
            temp_330 = fp_c8.data[int(temp_328)][temp_329];
            // 0x000A10: 0xEF95008002073814 Ldc
            temp_331 = temp_312 + 32;
            temp_332 = uint(temp_331) >> 2;
            temp_333 = temp_332 >> 2;
            temp_334 = int(temp_332) & 3;
            temp_335 = fp_c8.data[int(temp_333)][temp_334];
            temp_336 = int(temp_332) + 1;
            temp_337 = uint(temp_336) >> 2;
            temp_338 = temp_336 & 3;
            temp_339 = fp_c8.data[int(temp_337)][temp_338];
            // 0x000A18: 0x5C58300003A70C3B Fadd
            temp_340 = 0.0 - temp_299;
            temp_341 = temp_317 + temp_340;
            // 0x000A28: 0x5C58300003770D3D Fadd
            temp_342 = 0.0 - temp_300;
            temp_343 = temp_321 + temp_342;
            // 0x000A30: 0x5C58300003971010 Fadd
            temp_344 = 0.0 - temp_301;
            temp_345 = temp_326 + temp_344;
            // 0x000A38: 0x5C68100003B73B3E Fmul
            temp_346 = temp_341 * temp_341;
            // 0x000A48: 0x59A108000107110D Ffma
            temp_347 = 0.0 - temp_345;
            temp_348 = fma(temp_330, temp_347, temp_345);
            // 0x000A50: 0x59A01F0003D73D3E Ffma
            temp_349 = fma(temp_343, temp_343, temp_346);
            // 0x000A58: 0x59A01F0000D70D11 Ffma
            temp_350 = fma(temp_348, temp_348, temp_349);
            // 0x000A68: 0x508000000057110C Mufu
            temp_351 = inversesqrt(temp_350);
            // 0x000A70: 0x5C68100000C73B3F Fmul
            temp_352 = temp_341 * temp_351;
            // 0x000A78: 0x5C68100000C70D0D Fmul
            temp_353 = temp_348 * temp_351;
            // 0x000A88: 0x5C68100000C73D0C Fmul
            temp_354 = temp_343 * temp_351;
            // 0x000A90: 0x5C69100001473F14 Fmul
            temp_355 = 0.0 - temp_335;
            temp_356 = temp_352 * temp_355;
            // 0x000A98: 0x508000000087113F Mufu
            temp_357 = sqrt(temp_350);
            // 0x000AA8: 0x59A10A0001570C14 Ffma
            temp_358 = 0.0 - temp_339;
            temp_359 = fma(temp_354, temp_358, temp_356);
            // 0x000AB0: 0xEF9400800287380C Ldc
            temp_360 = temp_312 + 40;
            temp_361 = uint(temp_360) >> 2;
            temp_362 = temp_361 >> 2;
            temp_363 = int(temp_361) & 3;
            temp_364 = fp_c8.data[int(temp_362)][temp_363];
            // 0x000AB8: 0x59A10A0000C70D14 Ffma
            temp_365 = 0.0 - temp_364;
            temp_366 = fma(temp_353, temp_365, temp_359);
            // 0x000AC8: 0xEF9500800387380C Ldc
            temp_367 = temp_312 + 56;
            temp_368 = uint(temp_367) >> 2;
            temp_369 = temp_368 >> 2;
            temp_370 = int(temp_368) & 3;
            temp_371 = fp_c8.data[int(temp_369)][temp_370];
            temp_372 = int(temp_368) + 1;
            temp_373 = uint(temp_372) >> 2;
            temp_374 = temp_372 & 3;
            temp_375 = fp_c8.data[int(temp_373)][temp_374];
            // 0x000AD0: 0x59A4068000C7140D Ffma
            temp_376 = fma(temp_366, temp_371, temp_375);
            temp_377 = clamp(temp_376, 0.0, 1.0);
            // 0x000AD8: 0x010404000007F014 Mov32i
            // 0x000AE8: 0x5C68100000D70D15 Fmul
            temp_378 = temp_377 * temp_377;
            // 0x000AF0: 0x33A00A4000070D0C Ffma
            temp_379 = fma(temp_377, -2.0, 3.0);
            // 0x000AF8: 0x5C68100000C71515 Fmul
            temp_380 = temp_378 * temp_379;
            // 0x000B08: 0xEF9500800307380C Ldc
            temp_381 = temp_312 + 48;
            temp_382 = uint(temp_381) >> 2;
            temp_383 = temp_382 >> 2;
            temp_384 = int(temp_382) & 3;
            temp_385 = fp_c8.data[int(temp_383)][temp_384];
            temp_386 = int(temp_382) + 1;
            temp_387 = uint(temp_386) >> 2;
            temp_388 = temp_386 & 3;
            temp_389 = fp_c8.data[int(temp_387)][temp_388];
            // 0x000B10: 0x59A4068003F70C3F Ffma
            temp_390 = fma(temp_385, temp_357, temp_389);
            temp_391 = clamp(temp_390, 0.0, 1.0);
            // 0x000B18: 0x33A00A4000073F14 Ffma
            temp_392 = fma(temp_391, -2.0, 3.0);
            // 0x000B28: 0x5C68100003F73F3F Fmul
            temp_393 = temp_391 * temp_391;
            // 0x000B30: 0x5C68100003F71414 Fmul
            temp_394 = temp_392 * temp_393;
            // 0x000B38: 0x5C68100001471515 Fmul
            temp_395 = temp_380 * temp_394;
            // 0x000B48: 0x39585042F0071014 Fadd
            temp_396 = abs(temp_345);
            temp_397 = temp_396 + -120.0;
            // 0x000B50: 0x1EABD4CCCCD71414 Fmul32i
            temp_398 = temp_397 * -0.0500000007;
            temp_399 = clamp(temp_398, 0.0, 1.0);
            // 0x000B58: 0x5C6810000157143F Fmul
            temp_400 = temp_399 * temp_395;
            // 0x000B68: 0x36247F9000171414 Xmad
            temp_401 = floatBitsToUint(temp_399) >> 16;
            temp_402 = int(temp_401) << 16;
            // 0x000B70: 0x5BB383800FF73F07 Fsetp
            temp_403 = temp_400 <= 0.0;
            // 0x000B78: 0x7A05083C0F00FF14 Hadd2
            temp_404 = uint(temp_402);
            temp_405 = temp_287;
            temp_406 = temp_288;
            temp_407 = temp_289;
            temp_408 = temp_290;
            temp_409 = temp_291;
            temp_410 = temp_292;
            if (temp_403)
            {
                temp_411 = unpackHalf2x16(uint(temp_402)).y;
                temp_412 = packHalf2x16(vec2(1.0, temp_411));
                temp_404 = temp_412;
            }
            // 0x000B88: 0x5D2103902FF71407 Hsetp2
            temp_413 = unpackHalf2x16(temp_404).x;
            temp_414 = temp_413 == 0.0;
            // 0x000B90: 0xF0F800000008000F Sync
            if (temp_414)
            {
                // 0x000B98: 0x5080000000470C0C Mufu
                temp_415 = 1.0 / temp_385;
                // 0x000BA8: 0x5C69100000C70D0D Fmul
                temp_416 = 0.0 - temp_415;
                temp_417 = temp_389 * temp_416;
                // 0x000BB0: 0x5C60138000D71010 Fmnmx
                temp_418 = min(temp_345, temp_417);
                // 0x000BB8: 0x5C61178001070D0D Fmnmx
                temp_419 = 0.0 - temp_417;
                temp_420 = max(temp_419, temp_418);
                // 0x000BC8: 0x59A01F0000D70D3E Ffma
                temp_421 = fma(temp_420, temp_420, temp_349);
                // 0x000BD0: 0x5080000000573E10 Mufu
                temp_422 = inversesqrt(temp_421);
                // 0x000BD8: 0x5080000000873E3E Mufu
                temp_423 = sqrt(temp_421);
                // 0x000BE8: 0x5C68100001073B3B Fmul
                temp_424 = temp_341 * temp_422;
                // 0x000BF0: 0x5C68100001073D3D Fmul
                temp_425 = temp_343 * temp_422;
                // 0x000BF8: 0x5C68100001070D0D Fmul
                temp_426 = temp_420 * temp_422;
                // 0x000C08: 0x5C58100003B71910 Fadd
                temp_427 = temp_114 + temp_424;
                // 0x000C10: 0x5C58100003D71214 Fadd
                temp_428 = temp_116 + temp_425;
                // 0x000C18: 0x5C58100000D7180C Fadd
                temp_429 = temp_118 + temp_426;
                // 0x000C28: 0x5C68100001071011 Fmul
                temp_430 = temp_427 * temp_427;
                // 0x000C30: 0x59A0088001471411 Ffma
                temp_431 = fma(temp_428, temp_428, temp_430);
                // 0x000C38: 0x59A0088000C70C11 Ffma
                temp_432 = fma(temp_429, temp_429, temp_431);
                // 0x000C48: 0x5080000000571111 Mufu
                temp_433 = inversesqrt(temp_432);
                // 0x000C50: 0x5C68100001171010 Fmul
                temp_434 = temp_427 * temp_433;
                // 0x000C58: 0x5C68100001171414 Fmul
                temp_435 = temp_428 * temp_433;
                // 0x000C68: 0x5C68100001170C0C Fmul
                temp_436 = temp_429 * temp_433;
                // 0x000C70: 0x5C68100001073B15 Fmul
                temp_437 = temp_424 * temp_434;
                // 0x000C78: 0x5C68100001070E11 Fmul
                temp_438 = temp_70 * temp_434;
                // 0x000C88: 0x5C68100003B70E3B Fmul
                temp_439 = temp_70 * temp_424;
                // 0x000C90: 0x59A00A8001473D10 Ffma
                temp_440 = fma(temp_425, temp_435, temp_437);
                // 0x000C98: 0x59A0088001470015 Ffma
                temp_441 = fma(temp_69, temp_435, temp_438);
                // 0x000CA8: 0x59A01D8003D7003B Ffma
                temp_442 = fma(temp_69, temp_425, temp_439);
                // 0x000CB0: 0x59A4080000C70D10 Ffma
                temp_443 = fma(temp_426, temp_436, temp_440);
                temp_444 = clamp(temp_443, 0.0, 1.0);
                // 0x000CB8: 0x59A40A8000C71614 Ffma
                temp_445 = fma(temp_68, temp_436, temp_441);
                temp_446 = clamp(temp_445, 0.0, 1.0);
                // 0x000CC8: 0xEF94008000873815 Ldc
                temp_447 = temp_312 + 8;
                temp_448 = uint(temp_447) >> 2;
                temp_449 = temp_448 >> 2;
                temp_450 = int(temp_448) & 3;
                temp_451 = fp_c8.data[int(temp_449)][temp_450];
                // 0x000CD0: 0x59A01D8000D71611 Ffma
                temp_452 = fma(temp_68, temp_426, temp_442);
                // 0x000CD8: 0xEF9500800007380C Ldc
                temp_453 = uint(temp_312) >> 2;
                temp_454 = temp_453 >> 2;
                temp_455 = int(temp_453) & 3;
                temp_456 = fp_c8.data[int(temp_454)][temp_455];
                temp_457 = int(temp_453) + 1;
                temp_458 = uint(temp_457) >> 2;
                temp_459 = temp_457 & 3;
                temp_460 = fp_c8.data[int(temp_458)][temp_459];
                // 0x000CE8: 0xEF94008002C7383B Ldc
                temp_461 = temp_312 + 44;
                temp_462 = uint(temp_461) >> 2;
                temp_463 = temp_462 >> 2;
                temp_464 = int(temp_462) & 3;
                temp_465 = fp_c8.data[int(temp_463)][temp_464];
                // 0x000CF0: 0x5C68100000C73F0C Fmul
                temp_466 = temp_400 * temp_456;
                // 0x000CF8: 0x5C68100000D73F0D Fmul
                temp_467 = temp_400 * temp_460;
                // 0x000D08: 0x5C68100001573F3F Fmul
                temp_468 = temp_400 * temp_451;
                // 0x000D10: 0x5080000000473B15 Mufu
                temp_469 = 1.0 / temp_465;
                // 0x000D18: 0x51A01F040047153D Ffma
                temp_470 = fma(temp_469, temp_423, fp_c1.data[1].x);
                // 0x000D28: 0x5080000000473D15 Mufu
                temp_471 = 1.0 / temp_470;
                // 0x000D30: 0x1E23FB3333371515 Fmul32i
                temp_472 = temp_471 * 1.39999998;
                // 0x000D38: 0x5C6810000157153E Fmul
                temp_473 = temp_472 * temp_472;
                // 0x000D48: 0x59A20A0001473515 Ffma
                temp_474 = 0.0 - temp_446;
                temp_475 = fma(temp_167, temp_446, temp_474);
                // 0x000D50: 0x51A00A840017143B Ffma
                temp_476 = fma(temp_446, temp_475, fp_c1.data[0].y);
                // 0x000D58: 0x59A11F0003E71114 Ffma
                temp_477 = 0.0 - temp_473;
                temp_478 = fma(temp_452, temp_477, temp_473);
                // 0x000D68: 0x5080000000473B3E Mufu
                temp_479 = 1.0 / temp_476;
                // 0x000D70: 0x5C5C30000FF71115 Fadd
                temp_480 = temp_452 + -0.0;
                temp_481 = clamp(temp_480, 0.0, 1.0);
                // 0x000D78: 0x5C5C100001471111 Fadd
                temp_482 = temp_452 + temp_478;
                temp_483 = clamp(temp_482, 0.0, 1.0);
                // 0x000D88: 0x59A10A8001573414 Ffma
                temp_484 = 0.0 - temp_481;
                temp_485 = fma(temp_172, temp_484, temp_481);
                // 0x000D90: 0x5C5810000147343B Fadd
                temp_486 = temp_172 + temp_485;
                // 0x000D98: 0x5C68100003E73614 Fmul
                temp_487 = temp_161 * temp_479;
                // 0x000DA8: 0x5080000000473B3D Mufu
                temp_488 = 1.0 / temp_486;
                // 0x000DB0: 0x5C68100001471414 Fmul
                temp_489 = temp_487 * temp_487;
                // 0x000DB8: 0x5C68100003D7313D Fmul
                temp_490 = temp_205 * temp_488;
                // 0x000DC8: 0x5C68100003D71414 Fmul
                temp_491 = temp_489 * temp_490;
                // 0x000DD0: 0x5C68100001471514 Fmul
                temp_492 = temp_481 * temp_491;
                // 0x000DD8: 0x01040DF760C7F015 Mov32i
                // 0x000DE8: 0x49A20A8400271015 Ffma
                temp_493 = fma(temp_444, fp_c1.data[0].z, -6.98316002);
                // 0x000DF0: 0x5C68100001571015 Fmul
                temp_494 = temp_444 * temp_493;
                // 0x000DF8: 0x5C90008001570038 Rro
                // 0x000E08: 0x508000000027383E Mufu
                temp_495 = exp2(temp_494);
                // 0x000E10: 0x59A11F0003E70710 Ffma
                temp_496 = 0.0 - temp_495;
                temp_497 = fma(temp_207, temp_496, temp_495);
                // 0x000E18: 0x5C58100001070715 Fadd
                temp_498 = temp_207 + temp_497;
                // 0x000E28: 0x5C68100001570C15 Fmul
                temp_499 = temp_466 * temp_498;
                // 0x000E30: 0x5C68100001170C0C Fmul
                temp_500 = temp_466 * temp_483;
                // 0x000E38: 0x5C68100001471515 Fmul
                temp_501 = temp_499 * temp_492;
                // 0x000E48: 0x49A0178400670C2F Ffma
                temp_502 = fma(temp_500, fp_c1.data[1].z, temp_287);
                // 0x000E50: 0x49A0190400571532 Ffma
                temp_503 = fma(temp_501, fp_c1.data[1].y, temp_288);
                // 0x000E58: 0x59A11F0003E70815 Ffma
                temp_504 = 0.0 - temp_495;
                temp_505 = fma(temp_218, temp_504, temp_495);
                // 0x000E68: 0x59A11F0003E7093E Ffma
                temp_506 = 0.0 - temp_495;
                temp_507 = fma(temp_209, temp_506, temp_495);
                // 0x000E70: 0x5C58100001570810 Fadd
                temp_508 = temp_218 + temp_505;
                // 0x000E78: 0x5C58100003E7093E Fadd
                temp_509 = temp_209 + temp_507;
                // 0x000E88: 0x5C68100001070D15 Fmul
                temp_510 = temp_467 * temp_508;
                // 0x000E90: 0x5C68100003E73F3E Fmul
                temp_511 = temp_468 * temp_509;
                // 0x000E98: 0x5C68100001170D0D Fmul
                temp_512 = temp_467 * temp_483;
                // 0x000EA8: 0x5C68100001173F3F Fmul
                temp_513 = temp_468 * temp_483;
                // 0x000EB0: 0x5C68100001471515 Fmul
                temp_514 = temp_510 * temp_492;
                // 0x000EB8: 0x5C68100001473E3E Fmul
                temp_515 = temp_511 * temp_492;
                // 0x000EC8: 0x49A00E0400670D1C Ffma
                temp_516 = fma(temp_512, fp_c1.data[1].z, temp_289);
                // 0x000ED0: 0x49A00E8400673F1D Ffma
                temp_517 = fma(temp_513, fp_c1.data[1].z, temp_290);
                // 0x000ED8: 0x49A0098400571513 Ffma
                temp_518 = fma(temp_514, fp_c1.data[1].y, temp_291);
                // 0x000EE8: 0x49A00B8400573E17 Ffma
                temp_519 = fma(temp_515, fp_c1.data[1].y, temp_292);
                // 0x000EF0: 0xF0F800000007000F Sync
                temp_405 = temp_502;
                temp_406 = temp_503;
                temp_407 = temp_516;
                temp_408 = temp_517;
                temp_409 = temp_518;
                temp_410 = temp_519;
            }
            // 0x000EF8: 0x1C00000000173C3C Iadd32i
            temp_520 = temp_302 + 1;
            // 0x000F08: 0x5B6C038002673C07 Isetp
            temp_303 = uint(temp_520) >= floatBitsToUint(temp_201);
            // 0x000F10: 0xE2400FFFAA88000F Bra
            temp_302 = temp_520;
            temp_287 = temp_405;
            temp_288 = temp_406;
            temp_289 = temp_407;
            temp_290 = temp_408;
            temp_291 = temp_409;
            temp_292 = temp_410;
            temp_293 = temp_407;
            temp_294 = temp_408;
            temp_295 = temp_409;
            temp_296 = temp_410;
            temp_297 = temp_406;
            temp_298 = temp_405;
        }
        while (!temp_303);
        // 0x000F18: 0xF0F800000007000F Sync
    }
    // 0x000F28: 0x5C62578000070E0C Fmnmx
    temp_521 = abs(temp_70);
    temp_522 = abs(temp_69);
    temp_523 = max(temp_521, temp_522);
    // 0x000F30: 0xE003FF87CFF7FF31 Ipa
    // 0x000F38: 0x38681040E0070234 Fmul
    temp_524 = temp_156 * 7.0;
    // 0x000F48: 0x5C62578001A7270D Fmnmx
    temp_525 = abs(temp_270);
    temp_526 = abs(temp_263);
    temp_527 = max(temp_525, temp_526);
    // 0x000F50: 0x010000000017F018 Mov32i
    // 0x000F58: 0x4C98079C02070037 Mov
    // 0x000F68: 0x5C60578000C7160C Fmnmx
    temp_528 = abs(temp_68);
    temp_529 = max(temp_528, temp_523);
    // 0x000F70: 0x5C60578000D71B0D Fmnmx
    temp_530 = abs(temp_274);
    temp_531 = max(temp_530, temp_527);
    // 0x000F78: 0x5080000000470C15 Mufu
    temp_532 = 1.0 / temp_529;
    // 0x000F88: 0x49A005980A171C0B Ffma
    temp_533 = fma(temp_293, fp_c6.data[40].y, temp_246);
    // 0x000F90: 0x5080000000470D0D Mufu
    temp_534 = 1.0 / temp_531;
    // 0x000F98: 0x5C69100001571616 Fmul
    temp_535 = 0.0 - temp_532;
    temp_536 = temp_68 * temp_535;
    // 0x000FA8: 0x5C68100001570E14 Fmul
    temp_537 = temp_70 * temp_532;
    // 0x000FB0: 0x5080000000473131 Mufu
    // 0x000FB8: 0x5C68100001570015 Fmul
    temp_538 = temp_69 * temp_532;
    // 0x000FC8: 0x5C68100000D72719 Fmul
    temp_539 = temp_270 * temp_534;
    // 0x000FD0: 0x5C68100000D71A1A Fmul
    temp_540 = temp_263 * temp_534;
    // 0x000FD8: 0x5C69100000D71B1B Fmul
    temp_541 = 0.0 - temp_534;
    temp_542 = temp_274 * temp_541;
    // 0x000FE8: 0xC0BA0163EFF7140C Tex
    temp_543 = textureLod(fp_t_tcb_16, vec3(temp_537, temp_538, temp_536), 0.0).xyz;
    temp_544 = temp_543.x;
    temp_545 = temp_543.y;
    temp_546 = temp_543.z;
    // 0x000FF0: 0x3868104080070227 Fmul
    temp_547 = temp_156 * 4.0;
    // 0x000FF8: 0xC1BA0143F3471818 Tex
    temp_548 = textureLod(fp_t_tcb_14, vec4(temp_539, temp_540, temp_542, float(1)), temp_524).xyz;
    temp_549 = temp_548.x;
    temp_550 = temp_548.y;
    temp_551 = temp_548.z;
    // 0x001008: 0x5C98078001670026 Mov
    // 0x001010: 0xE043FF910317FF10 Ipa
    temp_552 = in_attr9.x;
    // 0x001018: 0x3859103F80070202 Fadd
    temp_553 = 0.0 - temp_156;
    temp_554 = temp_553 + 1.0;
    // 0x001028: 0xE043FF914317FF11 Ipa
    temp_555 = in_attr9.y;
    // 0x001030: 0x49A007980A171D0F Ffma
    temp_556 = fma(temp_294, fp_c6.data[40].y, temp_248);
    // 0x001038: 0xE043FF918317FF12 Ipa
    temp_557 = in_attr9.z;
    // 0x001048: 0xD9A2018332671426 Texs
    temp_558 = textureLod(fp_t_tcb_18, vec3(temp_537, temp_538, temp_536), temp_547).xyz;
    temp_559 = temp_558.x;
    temp_560 = temp_558.y;
    temp_561 = temp_558.z;
    // 0x001050: 0xDEBA0000C3771010 TexB
    temp_562 = texture(fp_t_cb7_20, vec3(temp_552, temp_555, temp_557)).x;
    // 0x001058: 0x5C68100000270202 Fmul
    temp_563 = temp_554 * temp_554;
    // 0x001068: 0x1E23E468DB97031C Fmul32i
    temp_564 = temp_170 * 0.193900004;
    // 0x001070: 0x010410676C97F01D Mov32i
    // 0x001078: 0x49A017180A17132E Ffma
    temp_565 = fma(temp_295, fp_c6.data[40].y, temp_285);
    // 0x001088: 0x0103E2CD9E87F013 Mov32i
    // 0x001090: 0x49A018180A171730 Ffma
    temp_566 = fma(temp_296, fp_c6.data[40].y, temp_286);
    // 0x001098: 0x5C68100000270216 Fmul
    temp_567 = temp_563 * temp_563;
    // 0x0010A8: 0x3859103F80070302 Fadd
    temp_568 = 0.0 - temp_170;
    temp_569 = temp_568 + 1.0;
    // 0x0010B0: 0x0104066978D7F014 Mov32i
    // 0x0010B8: 0x5080000000370202 Mufu
    temp_570 = log2(temp_569);
    // 0x0010C8: 0x4C98079800A7001B Mov
    // 0x0010D0: 0x4C9807980B470017 Mov
    // 0x0010D8: 0x49A00E040077161C Ffma
    temp_571 = fma(temp_567, fp_c1.data[1].w, temp_564);
    // 0x0010E8: 0x49A2098400871613 Ffma
    temp_572 = fma(temp_567, fp_c1.data[2].x, -0.168799996);
    // 0x0010F0: 0x4C68101808772525 Fmul
    temp_573 = temp_89 * fp_c6.data[33].w;
    // 0x0010F8: 0x49A20A0400971614 Ffma
    temp_574 = fma(temp_567, fp_c1.data[2].y, -3.60299993);
    // 0x001108: 0x0103F0000007F012 Mov32i
    // 0x001110: 0x49A00E8400C70311 Ffma
    temp_575 = fma(temp_170, fp_c1.data[3].x, 8.40400028);
    // 0x001118: 0x088BF05D63971C1C Fadd32i
    temp_576 = temp_571 + -0.522800028;
    // 0x001128: 0x5C68100001371615 Fmul
    temp_577 = temp_567 * temp_572;
    // 0x001130: 0x4C9807980867001D Mov
    // 0x001138: 0xF0F0000034370000 Depbar
    // 0x001148: 0x51A20B980B472020 Ffma
    temp_578 = 0.0 - fp_c6.data[45].x;
    temp_579 = fma(temp_96, fp_c6.data[45].x, temp_578);
    // 0x001150: 0x32A0093F00070000 Ffma
    temp_580 = fma(temp_69, 0.5, 0.5);
    // 0x001158: 0x51A0088400D70312 Ffma
    temp_581 = fma(temp_170, temp_575, fp_c1.data[3].y);
    // 0x001168: 0x4C68101808970211 Fmul
    temp_582 = temp_570 * fp_c6.data[34].y;
    // 0x001170: 0xE04BFF904317FF02 Ipa
    temp_583 = in_attr8.y;
    temp_584 = clamp(temp_583, 0.0, 1.0);
    // 0x001178: 0x5C68100001C7031C Fmul
    temp_585 = temp_170 * temp_576;
    // 0x001188: 0x51A20B980B472121 Ffma
    temp_586 = 0.0 - fp_c6.data[45].x;
    temp_587 = fma(temp_97, fp_c6.data[45].x, temp_586);
    // 0x001190: 0x51A20B980B470101 Ffma
    temp_588 = 0.0 - fp_c6.data[45].x;
    temp_589 = fma(temp_98, fp_c6.data[45].x, temp_588);
    // 0x001198: 0x386C104248070817 Fmul
    temp_590 = temp_218 * 50.0;
    temp_591 = clamp(temp_590, 0.0, 1.0);
    // 0x0011A8: 0x51A0090400E70312 Ffma
    temp_592 = fma(temp_170, temp_581, fp_c1.data[3].z);
    // 0x0011B0: 0x51A00A0400A71603 Ffma
    temp_593 = fma(temp_567, temp_574, fp_c1.data[2].z);
    // 0x0011B8: 0x5C90008001170011 Rro
    // 0x0011C8: 0x4C98079800970014 Mov
    // 0x0011D0: 0x5084000000271113 Mufu
    temp_594 = exp2(temp_582);
    temp_595 = clamp(temp_594, 0.0, 1.0);
    // 0x0011D8: 0x49A016980A17322D Ffma
    temp_596 = fma(temp_297, fp_c6.data[40].y, temp_284);
    // 0x0011E8: 0x5C60138001571215 Fmnmx
    temp_597 = min(temp_592, temp_577);
    // 0x0011F0: 0x59A00E0000371603 Ffma
    temp_598 = fma(temp_567, temp_593, temp_585);
    // 0x0011F8: 0x4C98079800870012 Mov
    // 0x001208: 0x49A005180A172F0A Ffma
    temp_599 = fma(temp_298, fp_c6.data[40].y, temp_259);
    // 0x001210: 0x5C5C30000FF71516 Fadd
    temp_600 = temp_597 + -0.0;
    temp_601 = clamp(temp_600, 0.0, 1.0);
    // 0x001218: 0x4C5C100400B70315 Fadd
    temp_602 = temp_598 + fp_c1.data[2].w;
    temp_603 = clamp(temp_602, 0.0, 1.0);
    // 0x001228: 0x4C59101800471203 Fadd
    temp_604 = 0.0 - fp_c6.data[2].x;
    temp_605 = temp_604 + fp_c6.data[1].x;
    // 0x001230: 0x4C59101800571411 Fadd
    temp_606 = 0.0 - fp_c6.data[2].y;
    temp_607 = temp_606 + fp_c6.data[1].y;
    // 0x001238: 0x4C59101800671B12 Fadd
    temp_608 = 0.0 - fp_c6.data[2].z;
    temp_609 = temp_608 + fp_c6.data[1].z;
    // 0x001248: 0x4C68101808871314 Fmul
    temp_610 = temp_595 * fp_c6.data[34].x;
    // 0x001250: 0x5C68100001771632 Fmul
    temp_611 = temp_601 * temp_591;
    // 0x001258: 0x5C58300001671515 Fadd
    temp_612 = 0.0 - temp_601;
    temp_613 = temp_603 + temp_612;
    // 0x001268: 0x51A0001800870303 Ffma
    temp_614 = fma(temp_605, temp_580, fp_c6.data[2].x);
    // 0x001270: 0x51A0001800971113 Ffma
    temp_615 = fma(temp_607, temp_580, fp_c6.data[2].y);
    // 0x001278: 0x51A0001800A71200 Ffma
    temp_616 = fma(temp_609, temp_580, fp_c6.data[2].z);
    // 0x001288: 0x51A00E9808671414 Ffma
    temp_617 = fma(temp_610, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x001290: 0x010404000007F011 Mov32i
    // 0x001298: 0x59A0190001570707 Ffma
    temp_618 = fma(temp_207, temp_613, temp_611);
    // 0x0012A8: 0x59A0190001570808 Ffma
    temp_619 = fma(temp_218, temp_613, temp_611);
    // 0x0012B0: 0x59A0190001570909 Ffma
    temp_620 = fma(temp_209, temp_613, temp_611);
    // 0x0012B8: 0xF0F0000034270000 Depbar
    // 0x0012C8: 0x49A0060400670303 Ffma
    temp_621 = fma(temp_614, fp_c1.data[1].z, temp_544);
    // 0x0012D0: 0x49A006840067130D Ffma
    temp_622 = fma(temp_615, fp_c1.data[1].z, temp_545);
    // 0x0012D8: 0x49A007040067000E Ffma
    temp_623 = fma(temp_616, fp_c1.data[1].z, temp_546);
    // 0x0012E8: 0x33A008C00007020C Ffma
    temp_624 = fma(temp_584, -2.0, 3.0);
    // 0x0012F0: 0xE043FF900317FF11 Ipa
    temp_625 = in_attr8.x;
    // 0x0012F8: 0x5C68100000270202 Fmul
    temp_626 = temp_584 * temp_584;
    // 0x001308: 0xE043FF8C8317FF31 Ipa
    temp_627 = in_attr4.z;
    // 0x001310: 0x59A2018001472222 Ffma
    temp_628 = 0.0 - temp_621;
    temp_629 = fma(temp_86, temp_617, temp_628);
    // 0x001318: 0x59A2068001472323 Ffma
    temp_630 = 0.0 - temp_622;
    temp_631 = fma(temp_87, temp_617, temp_630);
    // 0x001328: 0x59A2070001472414 Ffma
    temp_632 = 0.0 - temp_623;
    temp_633 = fma(temp_88, temp_617, temp_632);
    // 0x001330: 0xF0F0000034170000 Depbar
    // 0x001338: 0x49A0131808571818 Ffma
    temp_634 = fma(temp_549, fp_c6.data[33].y, temp_559);
    // 0x001348: 0x49A0139808571919 Ffma
    temp_635 = fma(temp_550, fp_c6.data[33].y, temp_560);
    // 0x001350: 0x49A0199808571A1A Ffma
    temp_636 = fma(temp_551, fp_c6.data[33].y, temp_561);
    // 0x001358: 0x59A0018002572203 Ffma
    temp_637 = fma(temp_629, temp_573, temp_621);
    // 0x001368: 0x59A006800257230D Ffma
    temp_638 = fma(temp_631, temp_573, temp_622);
    // 0x001370: 0x59A0070002571414 Ffma
    temp_639 = fma(temp_633, temp_573, temp_623);
    // 0x001378: 0x59A0168001870707 Ffma
    temp_640 = fma(temp_618, temp_634, temp_596);
    // 0x001388: 0x5C68100000270C00 Fmul
    temp_641 = temp_624 * temp_626;
    // 0x001390: 0x59A0170001970808 Ffma
    temp_642 = fma(temp_619, temp_635, temp_565);
    // 0x001398: 0x5C58100000A7030A Fadd
    temp_643 = temp_637 + temp_599;
    // 0x0013A8: 0x5C58100000B70D0D Fadd
    temp_644 = temp_638 + temp_533;
    // 0x0013B0: 0x5C58100000F71414 Fadd
    temp_645 = temp_639 + temp_556;
    // 0x0013B8: 0x59A0180001A70909 Ffma
    temp_646 = fma(temp_620, temp_636, temp_566);
    // 0x0013C8: 0x4C98079802870003 Mov
    // 0x0013D0: 0x4C68101803770000 Fmul
    temp_647 = temp_641 * fp_c6.data[13].w;
    // 0x0013D8: 0x59A1050000A72B0A Ffma
    temp_648 = 0.0 - temp_643;
    temp_649 = fma(temp_7, temp_648, temp_643);
    // 0x0013E8: 0x59A1068000D72B02 Ffma
    temp_650 = 0.0 - temp_644;
    temp_651 = fma(temp_7, temp_650, temp_644);
    // 0x0013F0: 0x59A10A0001472B14 Ffma
    temp_652 = 0.0 - temp_645;
    temp_653 = fma(temp_7, temp_652, temp_645);
    // 0x0013F8: 0x51A0019802872020 Ffma
    temp_654 = fma(temp_579, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001408: 0x59A0038000A70407 Ffma
    temp_655 = fma(temp_104, temp_649, temp_640);
    // 0x001410: 0x4C98079802970004 Mov
    // 0x001418: 0x59A0040000270508 Ffma
    temp_656 = fma(temp_106, temp_651, temp_642);
    // 0x001428: 0x59A0048001470602 Ffma
    temp_657 = fma(temp_107, temp_653, temp_646);
    // 0x001430: 0x49A508980BC71010 Ffma
    temp_658 = 0.0 - fp_c6.data[47].x;
    temp_659 = fma(temp_562, temp_658, temp_625);
    temp_660 = clamp(temp_659, 0.0, 1.0);
    // 0x001438: 0x5C68100000772929 Fmul
    temp_661 = temp_279 * temp_655;
    // 0x001448: 0x5080000000371010 Mufu
    temp_662 = log2(temp_660);
    // 0x001450: 0x51A0021802972121 Ffma
    temp_663 = fma(temp_587, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001458: 0x5C68100000872A2A Fmul
    temp_664 = temp_281 * temp_656;
    // 0x001468: 0x4C98079802A70004 Mov
    // 0x001470: 0x5C68100000272C02 Fmul
    temp_665 = temp_283 * temp_657;
    // 0x001478: 0x49A2001803570007 Ffma
    temp_666 = 0.0 - temp_647;
    temp_667 = fma(temp_647, fp_c6.data[13].y, temp_666);
    // 0x001488: 0x49A0149406C71E1E Ffma
    temp_668 = fma(temp_275, fp_c5.data[27].x, temp_661);
    // 0x001490: 0x49A0151406C71F1F Ffma
    temp_669 = fma(temp_276, fp_c5.data[27].x, temp_664);
    // 0x001498: 0x51A0021802A70101 Ffma
    temp_670 = fma(temp_589, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0014A8: 0x49A0011406C72828 Ffma
    temp_671 = fma(temp_277, fp_c5.data[27].x, temp_665);
    // 0x0014B0: 0x5C58300002071E03 Fadd
    temp_672 = 0.0 - temp_654;
    temp_673 = temp_668 + temp_672;
    // 0x0014B8: 0x4C68101803171004 Fmul
    temp_674 = temp_662 * fp_c6.data[12].y;
    // 0x0014C8: 0x5C58300002171F02 Fadd
    temp_675 = 0.0 - temp_663;
    temp_676 = temp_669 + temp_675;
    // 0x0014D0: 0x49A010180BF70305 Ffma
    temp_677 = fma(temp_673, fp_c6.data[47].w, temp_654);
    // 0x0014D8: 0x5C58300000172803 Fadd
    temp_678 = 0.0 - temp_670;
    temp_679 = temp_671 + temp_678;
    // 0x0014E8: 0x49A010980BF70202 Ffma
    temp_680 = fma(temp_676, fp_c6.data[47].w, temp_663);
    // 0x0014F0: 0x5C90008000470006 Rro
    // 0x0014F8: 0x49A2001803470004 Ffma
    temp_681 = 0.0 - temp_647;
    temp_682 = fma(temp_647, fp_c6.data[13].x, temp_681);
    // 0x001508: 0x5080000000270606 Mufu
    temp_683 = exp2(temp_674);
    // 0x001510: 0x5C60178000572005 Fmnmx
    temp_684 = max(temp_654, temp_677);
    // 0x001518: 0x49A000980BF70303 Ffma
    temp_685 = fma(temp_679, fp_c6.data[47].w, temp_670);
    // 0x001528: 0x5C60178000272102 Fmnmx
    temp_686 = max(temp_663, temp_680);
    // 0x001530: 0x49A2001803670000 Ffma
    temp_687 = 0.0 - temp_647;
    temp_688 = fma(temp_647, fp_c6.data[13].z, temp_687);
    // 0x001538: 0x59A0028000470504 Ffma
    temp_689 = fma(temp_684, temp_682, temp_684);
    // 0x001548: 0x5C60178000370103 Fmnmx
    temp_690 = max(temp_670, temp_685);
    // 0x001550: 0x59A0010000770201 Ffma
    temp_691 = fma(temp_686, temp_667, temp_686);
    // 0x001558: 0x0103E8000007F005 Mov32i
    // 0x001568: 0x0103F8000007F007 Mov32i
    // 0x001570: 0x59A0018000070302 Ffma
    temp_692 = fma(temp_690, temp_688, temp_690);
    // 0x001578: 0x4C68101802B70603 Fmul
    temp_693 = temp_683 * fp_c6.data[10].w;
    // 0x001588: 0x5C59100000471E00 Fadd
    temp_694 = 0.0 - temp_668;
    temp_695 = temp_694 + temp_689;
    // 0x001590: 0x5C59100000171F01 Fadd
    temp_696 = 0.0 - temp_669;
    temp_697 = temp_696 + temp_691;
    // 0x001598: 0x4C58100C03873104 Fadd
    temp_698 = temp_627 + fp_c3.data[14].x;
    // 0x0015A8: 0x5C9807800FF70006 Mov
    // 0x0015B0: 0x5C59100000272802 Fadd
    temp_699 = 0.0 - temp_671;
    temp_700 = temp_699 + temp_692;
    // 0x0015B8: 0x59A00F0000370000 Ffma
    temp_701 = fma(temp_695, temp_693, temp_668);
    // 0x0015C8: 0x59A00F8000370101 Ffma
    temp_702 = fma(temp_697, temp_693, temp_669);
    // 0x0015D0: 0x49A37F8C03C70404 Ffma
    temp_703 = 0.0 - fp_c3.data[15].x;
    temp_704 = fma(temp_698, temp_703, -0.0);
    // 0x0015D8: 0x59A0140000370202 Ffma
    temp_705 = fma(temp_700, temp_693, temp_671);
    // 0x0015E8: 0x0103F8000007F003 Mov32i
    // 0x0015F0: 0xE30000000007000F Exit
    out_attr0.x = temp_701;
    out_attr0.y = temp_702;
    out_attr0.z = temp_705;
    out_attr0.w = 1.0;
    out_attr1.x = temp_704;
    out_attr1.y = 0.25;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
