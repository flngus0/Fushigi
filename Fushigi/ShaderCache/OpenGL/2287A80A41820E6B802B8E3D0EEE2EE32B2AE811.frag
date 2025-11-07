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

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_34;
layout (binding = 2) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 3) uniform samplerCube fp_t_tcb_16;
layout (binding = 4) uniform sampler2D fp_t_tcb_30;
layout (binding = 5) uniform sampler2D fp_t_tcb_36;
layout (binding = 6) uniform sampler2D fp_t_tcb_24;
layout (binding = 7) uniform sampler2D fp_t_tcb_20;
layout (binding = 8) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 6) in vec4 in_attr6;
layout (location = 7) in vec4 in_attr7;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise vec2 temp_4;
    precise float temp_5;
    precise float temp_6;
    precise vec2 temp_7;
    precise float temp_8;
    precise float temp_9;
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
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
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
    precise vec3 temp_111;
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
    precise float temp_181;
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
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
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
    precise float temp_235;
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
    precise vec3 temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise vec3 temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise vec3 temp_261;
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
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
    precise float temp_305;
    precise float temp_306;
    precise float temp_307;
    precise float temp_308;
    precise float temp_309;
    precise float temp_310;
    precise float temp_311;
    precise float temp_312;
    precise float temp_313;
    precise float temp_314;
    precise float temp_315;
    precise float temp_316;
    precise float temp_317;
    precise float temp_318;
    precise float temp_319;
    precise float temp_320;
    precise float temp_321;
    precise float temp_322;
    precise float temp_323;
    precise float temp_324;
    precise float temp_325;
    precise float temp_326;
    precise float temp_327;
    precise float temp_328;
    precise float temp_329;
    precise float temp_330;
    precise float temp_331;
    precise float temp_332;
    precise float temp_333;
    precise float temp_334;
    precise float temp_335;
    precise float temp_336;
    precise float temp_337;
    precise float temp_338;
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
    precise float temp_360;
    precise float temp_361;
    precise float temp_362;
    precise float temp_363;
    precise float temp_364;
    precise float temp_365;
    precise float temp_366;
    precise float temp_367;
    precise float temp_368;
    precise float temp_369;
    precise float temp_370;
    precise float temp_371;
    precise float temp_372;
    precise float temp_373;
    precise float temp_374;
    precise float temp_375;
    precise float temp_376;
    precise float temp_377;
    precise float temp_378;
    precise float temp_379;
    precise float temp_380;
    precise float temp_381;
    precise float temp_382;
    precise float temp_383;
    precise float temp_384;
    precise float temp_385;
    precise float temp_386;
    precise float temp_387;
    precise float temp_388;
    precise float temp_389;
    precise float temp_390;
    precise float temp_391;
    precise float temp_392;
    precise float temp_393;
    // 0x000008: 0xE003FF87CFF7FF0F Ipa
    // 0x000010: 0x5080000000470F0F Mufu
    // 0x000018: 0xE043FF8D80F7FF15 Ipa
    temp_0 = in_attr5.z;
    // 0x000028: 0xE043FF8DC0F7FF00 Ipa
    temp_1 = in_attr5.w;
    // 0x000030: 0xE043FF8E00F7FF01 Ipa
    temp_2 = in_attr6.x;
    // 0x000038: 0xE043FF8E40F7FF02 Ipa
    temp_3 = in_attr6.y;
    // 0x000048: 0xD830026FF0071504 Texs
    temp_4 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_5 = temp_4.x;
    temp_6 = temp_4.y;
    // 0x000050: 0xD830034FF0270106 Texs
    temp_7 = texture(fp_t_tcb_34, vec2(temp_2, temp_3)).xy;
    temp_8 = temp_7.x;
    temp_9 = temp_7.y;
    // 0x000058: 0xE043FF8900F7FF0C Ipa
    temp_10 = in_attr1.x;
    // 0x000068: 0xE043FF8940F7FF0B Ipa
    temp_11 = in_attr1.y;
    // 0x000070: 0xE043FF8A00F7FF09 Ipa
    temp_12 = in_attr2.x;
    // 0x000078: 0xE043FF8980F7FF0A Ipa
    temp_13 = in_attr1.z;
    // 0x000088: 0xE043FF8A40F7FF08 Ipa
    temp_14 = in_attr2.y;
    // 0x000090: 0xE043FF8A80F7FF03 Ipa
    temp_15 = in_attr2.z;
    // 0x000098: 0xE043FF8800F7FF10 Ipa
    temp_16 = in_attr0.x;
    // 0x0000A8: 0x5C68100000C70C0E Fmul
    temp_17 = temp_10 * temp_10;
    // 0x0000B0: 0x5C6810000097090D Fmul
    temp_18 = temp_12 * temp_12;
    // 0x0000B8: 0x59A0070000B70B11 Ffma
    temp_19 = fma(temp_11, temp_11, temp_17);
    // 0x0000C8: 0xE043FF8840F7FF0E Ipa
    temp_20 = in_attr0.y;
    // 0x0000D0: 0x5C68100001071014 Fmul
    temp_21 = temp_16 * temp_16;
    // 0x0000D8: 0x59A006800087080D Ffma
    temp_22 = fma(temp_14, temp_14, temp_18);
    // 0x0000E8: 0x59A0088000A70A13 Ffma
    temp_23 = fma(temp_13, temp_13, temp_19);
    // 0x0000F0: 0x5080000000571311 Mufu
    temp_24 = inversesqrt(temp_23);
    // 0x0000F8: 0x59A0068000370312 Ffma
    temp_25 = fma(temp_15, temp_15, temp_22);
    // 0x000108: 0xE043FF8880F7FF0D Ipa
    temp_26 = in_attr0.z;
    // 0x000110: 0x5080000000571212 Mufu
    temp_27 = inversesqrt(temp_25);
    // 0x000118: 0x5C68100001170C0C Fmul
    temp_28 = temp_10 * temp_24;
    // 0x000128: 0x5C68100001170B0B Fmul
    temp_29 = temp_11 * temp_24;
    // 0x000130: 0x5C68100001170A0A Fmul
    temp_30 = temp_13 * temp_24;
    // 0x000138: 0x5C68100001270808 Fmul
    temp_31 = temp_14 * temp_27;
    // 0x000148: 0x5C68100001270303 Fmul
    temp_32 = temp_15 * temp_27;
    // 0x000150: 0x5C68100001270909 Fmul
    temp_33 = temp_12 * temp_27;
    // 0x000158: 0x59A00A0000E70E14 Ffma
    temp_34 = fma(temp_20, temp_20, temp_21);
    // 0x000168: 0x59A00A0000D70D14 Ffma
    temp_35 = fma(temp_26, temp_26, temp_34);
    // 0x000170: 0x5080000000571413 Mufu
    temp_36 = inversesqrt(temp_35);
    // 0x000178: 0x5C68100001371010 Fmul
    temp_37 = temp_16 * temp_36;
    // 0x000188: 0x5C68100001370D0D Fmul
    temp_38 = temp_26 * temp_36;
    // 0x000190: 0x5C68100000570511 Fmul
    temp_39 = temp_6 * temp_6;
    // 0x000198: 0x49A0021407F70606 Ffma
    temp_40 = fma(temp_8, fp_c5.data[31].w, temp_5);
    // 0x0001A8: 0x49A0029407F70712 Ffma
    temp_41 = fma(temp_9, fp_c5.data[31].w, temp_6);
    // 0x0001B0: 0x5C68100001370E07 Fmul
    temp_42 = temp_20 * temp_36;
    // 0x0001B8: 0xE043FF8B40F7FF0E Ipa
    temp_43 = in_attr3.y;
    // 0x0001C8: 0x59A0088000470411 Ffma
    temp_44 = fma(temp_5, temp_5, temp_39);
    // 0x0001D0: 0x5C68100000670605 Fmul
    temp_45 = temp_40 * temp_40;
    // 0x0001D8: 0x385D103F80071104 Fadd
    temp_46 = 0.0 - temp_44;
    temp_47 = temp_46 + 1.0;
    temp_48 = clamp(temp_47, 0.0, 1.0);
    // 0x0001E8: 0xE043FF8B00F7FF11 Ipa
    temp_49 = in_attr3.x;
    // 0x0001F0: 0x59A0028001271205 Ffma
    temp_50 = fma(temp_41, temp_41, temp_45);
    // 0x0001F8: 0x5080000000870404 Mufu
    temp_51 = sqrt(temp_48);
    // 0x000208: 0x59A0028000470405 Ffma
    temp_52 = fma(temp_51, temp_51, temp_50);
    // 0x000210: 0x5080000000570505 Mufu
    temp_53 = inversesqrt(temp_52);
    // 0x000218: 0x5C68100000571216 Fmul
    temp_54 = temp_41 * temp_53;
    // 0x000228: 0x5C68100000570612 Fmul
    temp_55 = temp_40 * temp_53;
    // 0x000230: 0xE043FF8B80F7FF06 Ipa
    temp_56 = in_attr3.z;
    // 0x000238: 0x5C68100000570404 Fmul
    temp_57 = temp_51 * temp_53;
    // 0x000248: 0x5C68100000971609 Fmul
    temp_58 = temp_54 * temp_33;
    // 0x000250: 0x5C68100000871608 Fmul
    temp_59 = temp_54 * temp_31;
    // 0x000258: 0x5C68100000371603 Fmul
    temp_60 = temp_54 * temp_32;
    // 0x000268: 0x59A0048000C71209 Ffma
    temp_61 = fma(temp_55, temp_28, temp_58);
    // 0x000270: 0x59A0040000B71205 Ffma
    temp_62 = fma(temp_55, temp_29, temp_59);
    // 0x000278: 0x59A0018000A71203 Ffma
    temp_63 = fma(temp_55, temp_30, temp_60);
    // 0x000288: 0x5C68100001171108 Fmul
    temp_64 = temp_49 * temp_49;
    // 0x000290: 0x59A0048001070410 Ffma
    temp_65 = fma(temp_57, temp_37, temp_61);
    // 0x000298: 0x59A0028000770407 Ffma
    temp_66 = fma(temp_57, temp_42, temp_62);
    // 0x0002A8: 0x59A0018000D7040D Ffma
    temp_67 = fma(temp_57, temp_38, temp_63);
    // 0x0002B0: 0x59A0040000E70E08 Ffma
    temp_68 = fma(temp_43, temp_43, temp_64);
    // 0x0002B8: 0x5C68100001071005 Fmul
    temp_69 = temp_65 * temp_65;
    // 0x0002C8: 0x59A0028000770703 Ffma
    temp_70 = fma(temp_66, temp_66, temp_69);
    // 0x0002D0: 0x59A0040000670605 Ffma
    temp_71 = fma(temp_56, temp_56, temp_68);
    // 0x0002D8: 0x59A0018000D70D04 Ffma
    temp_72 = fma(temp_67, temp_67, temp_70);
    // 0x0002E8: 0x5080000000570503 Mufu
    temp_73 = inversesqrt(temp_71);
    // 0x0002F0: 0x010410676C97F014 Mov32i
    // 0x0002F8: 0x508000000057040A Mufu
    temp_74 = inversesqrt(temp_72);
    // 0x000308: 0x5C69100000371109 Fmul
    temp_75 = 0.0 - temp_73;
    temp_76 = temp_49 * temp_75;
    // 0x000310: 0x5C69100000370E0E Fmul
    temp_77 = 0.0 - temp_73;
    temp_78 = temp_43 * temp_77;
    // 0x000318: 0x5C68100000A71008 Fmul
    temp_79 = temp_65 * temp_74;
    // 0x000328: 0x5C69100000370610 Fmul
    temp_80 = 0.0 - temp_73;
    temp_81 = temp_56 * temp_80;
    // 0x000330: 0x5C68100000A70703 Fmul
    temp_82 = temp_66 * temp_74;
    // 0x000338: 0x5C68100000A70D0A Fmul
    temp_83 = temp_67 * temp_74;
    // 0x000348: 0x5C6810000097080C Fmul
    temp_84 = temp_79 * temp_76;
    // 0x000350: 0x59A0060000E7030D Ffma
    temp_85 = fma(temp_82, temp_78, temp_84);
    // 0x000358: 0x59A4068001070A0D Ffma
    temp_86 = fma(temp_83, temp_81, temp_85);
    temp_87 = clamp(temp_86, 0.0, 1.0);
    // 0x000368: 0x5C68100000D70806 Fmul
    temp_88 = temp_79 * temp_87;
    // 0x000370: 0x5C68100000D70304 Fmul
    temp_89 = temp_82 * temp_87;
    // 0x000378: 0x5C68100000D70A05 Fmul
    temp_90 = temp_83 * temp_87;
    // 0x000388: 0x32A204C000070606 Ffma
    temp_91 = 0.0 - temp_76;
    temp_92 = fma(temp_88, 2.0, temp_91);
    // 0x000390: 0x32A2074000070407 Ffma
    temp_93 = 0.0 - temp_78;
    temp_94 = fma(temp_89, 2.0, temp_93);
    // 0x000398: 0x32A208400007050C Ffma
    temp_95 = 0.0 - temp_81;
    temp_96 = fma(temp_90, 2.0, temp_95);
    // 0x0003A8: 0x4C98079407E70004 Mov
    // 0x0003B0: 0x5C62578000770605 Fmnmx
    temp_97 = abs(temp_92);
    temp_98 = abs(temp_94);
    temp_99 = max(temp_97, temp_98);
    // 0x0003B8: 0x4C6810180A070404 Fmul
    temp_100 = fp_c5.data[31].z * fp_c6.data[40].x;
    // 0x0003C8: 0x5C60578000570C11 Fmnmx
    temp_101 = abs(temp_96);
    temp_102 = max(temp_101, temp_99);
    // 0x0003D0: 0x5080000000471111 Mufu
    temp_103 = 1.0 / temp_102;
    // 0x0003D8: 0x386013BF80070404 Fmnmx
    temp_104 = min(temp_100, 1.0);
    // 0x0003E8: 0x4C6017840007040B Fmnmx
    temp_105 = max(temp_104, fp_c1.data[0].x);
    // 0x0003F0: 0x010000000017F004 Mov32i
    // 0x0003F8: 0x5C68100001170605 Fmul
    temp_106 = temp_92 * temp_103;
    // 0x000408: 0x5C68100001170706 Fmul
    temp_107 = temp_94 * temp_103;
    // 0x000410: 0x5C69100001170C07 Fmul
    temp_108 = 0.0 - temp_103;
    temp_109 = temp_96 * temp_108;
    // 0x000418: 0x38681040E0070B12 Fmul
    temp_110 = temp_105 * 7.0;
    // 0x000428: 0xC1BA0143F1270404 Tex
    temp_111 = textureLod(fp_t_tcb_14, vec4(temp_106, temp_107, temp_109, float(1)), temp_110).xyz;
    temp_112 = temp_111.x;
    temp_113 = temp_111.y;
    temp_114 = temp_111.z;
    // 0x000430: 0x3859103F80070B0C Fadd
    temp_115 = 0.0 - temp_105;
    temp_116 = temp_115 + 1.0;
    // 0x000438: 0x1E23E468DB970D11 Fmul32i
    temp_117 = temp_87 * 0.193900004;
    // 0x000448: 0x0104066978D7F013 Mov32i
    // 0x000450: 0x0103E2CD9E87F016 Mov32i
    // 0x000458: 0x49A00A0400370D14 Ffma
    temp_118 = fma(temp_87, fp_c1.data[0].w, 8.40400028);
    // 0x000468: 0x5C68100000C70C0C Fmul
    temp_119 = temp_116 * temp_116;
    // 0x000470: 0x51A00A0400470D14 Ffma
    temp_120 = fma(temp_87, temp_118, fp_c1.data[1].x);
    // 0x000478: 0x5C68100000C70C0C Fmul
    temp_121 = temp_119 * temp_119;
    // 0x000488: 0x51A00A0400570D14 Ffma
    temp_122 = fma(temp_87, temp_120, fp_c1.data[1].y);
    // 0x000490: 0x49A0088400170C11 Ffma
    temp_123 = fma(temp_121, fp_c1.data[0].y, temp_117);
    // 0x000498: 0x49A2098400270C13 Ffma
    temp_124 = fma(temp_121, fp_c1.data[0].z, -3.60299993);
    // 0x0004A8: 0x49A20B0400870C12 Ffma
    temp_125 = fma(temp_121, fp_c1.data[2].x, -0.168799996);
    // 0x0004B0: 0x088BF05D63971107 Fadd32i
    temp_126 = temp_123 + -0.522800028;
    // 0x0004B8: 0x51A0098400670C11 Ffma
    temp_127 = fma(temp_121, temp_124, fp_c1.data[1].z);
    // 0x0004C8: 0x5C68100001270C12 Fmul
    temp_128 = temp_121 * temp_125;
    // 0x0004D0: 0x5C68100000770D07 Fmul
    temp_129 = temp_87 * temp_126;
    // 0x0004D8: 0x59A0038001170C07 Ffma
    temp_130 = fma(temp_121, temp_127, temp_129);
    // 0x0004E8: 0x5C6013800127140C Fmnmx
    temp_131 = min(temp_122, temp_128);
    // 0x0004F0: 0x4C98079407B70011 Mov
    // 0x0004F8: 0x4C58301805C70912 Fadd
    temp_132 = 0.0 - fp_c6.data[23].x;
    temp_133 = temp_76 + temp_132;
    // 0x000508: 0x4C5C100400770707 Fadd
    temp_134 = temp_130 + fp_c1.data[1].w;
    temp_135 = clamp(temp_134, 0.0, 1.0);
    // 0x000510: 0x5C5C30000FF70C0C Fadd
    temp_136 = temp_131 + -0.0;
    temp_137 = clamp(temp_136, 0.0, 1.0);
    // 0x000518: 0x386C104248071111 Fmul
    temp_138 = fp_c5.data[30].w * 50.0;
    temp_139 = clamp(temp_138, 0.0, 1.0);
    // 0x000528: 0x5C68100001271214 Fmul
    temp_140 = temp_133 * temp_133;
    // 0x000530: 0x5C68100001170C11 Fmul
    temp_141 = temp_137 * temp_139;
    // 0x000538: 0x5C58300000C7070C Fadd
    temp_142 = 0.0 - temp_137;
    temp_143 = temp_135 + temp_142;
    // 0x000548: 0x4C58301805D70E07 Fadd
    temp_144 = 0.0 - fp_c6.data[23].y;
    temp_145 = temp_78 + temp_144;
    // 0x000550: 0x49A0089407B70C11 Ffma
    temp_146 = fma(temp_143, fp_c5.data[30].w, temp_141);
    // 0x000558: 0x59A00A0000770713 Ffma
    temp_147 = fma(temp_145, temp_145, temp_140);
    // 0x000568: 0x4C58301805E7100C Fadd
    temp_148 = 0.0 - fp_c6.data[23].z;
    temp_149 = temp_81 + temp_148;
    // 0x000570: 0x59A0098000C70C14 Ffma
    temp_150 = fma(temp_149, temp_149, temp_147);
    // 0x000578: 0x4C68101406271113 Fmul
    temp_151 = temp_146 * fp_c5.data[24].z;
    // 0x000588: 0x5080000000571414 Mufu
    temp_152 = inversesqrt(temp_150);
    // 0x000590: 0x5C68100001471212 Fmul
    temp_153 = temp_133 * temp_152;
    // 0x000598: 0x5C68100001470711 Fmul
    temp_154 = temp_145 * temp_152;
    // 0x0005A8: 0x5C68100001470C17 Fmul
    temp_155 = temp_149 * temp_152;
    // 0x0005B0: 0xE003FF870FF7FF14 Ipa
    temp_156 = gl_FragCoord.x;
    temp_157 = support_buffer.render_scale[0];
    temp_158 = temp_156 / temp_157;
    // 0x0005B8: 0x4C68100C04A71414 Fmul
    temp_159 = temp_158 * fp_c3.data[18].z;
    // 0x0005C8: 0x5C68100001370507 Fmul
    temp_160 = temp_113 * temp_151;
    // 0x0005D0: 0x5C6810000137040C Fmul
    temp_161 = temp_112 * temp_151;
    // 0x0005D8: 0x5C68100001370605 Fmul
    temp_162 = temp_114 * temp_151;
    // 0x0005E8: 0x5C68100001270913 Fmul
    temp_163 = temp_76 * temp_153;
    // 0x0005F0: 0x4C69101805C71204 Fmul
    temp_164 = 0.0 - fp_c6.data[23].x;
    temp_165 = temp_153 * temp_164;
    // 0x0005F8: 0x5C68100001270812 Fmul
    temp_166 = temp_79 * temp_153;
    // 0x000608: 0x51A4058400070B06 Ffma
    temp_167 = fma(temp_105, temp_105, fp_c1.data[0].x);
    temp_168 = clamp(temp_167, 0.0, 1.0);
    // 0x000610: 0x4C68101808570C0C Fmul
    temp_169 = temp_161 * fp_c6.data[33].y;
    // 0x000618: 0x4C68101808570505 Fmul
    temp_170 = temp_162 * fp_c6.data[33].y;
    // 0x000628: 0x59A0098001170E0E Ffma
    temp_171 = fma(temp_78, temp_154, temp_163);
    // 0x000630: 0x49A1021805D71104 Ffma
    temp_172 = 0.0 - fp_c6.data[23].y;
    temp_173 = fma(temp_154, temp_172, temp_165);
    // 0x000638: 0x59A0090001170309 Ffma
    temp_174 = fma(temp_82, temp_154, temp_166);
    // 0x000648: 0x0103F0000007F011 Mov32i
    // 0x000650: 0x01040DF760C7F012 Mov32i
    // 0x000658: 0x59A4070001771010 Ffma
    temp_175 = fma(temp_81, temp_155, temp_171);
    temp_176 = clamp(temp_175, 0.0, 1.0);
    // 0x000668: 0x5C6810000067060E Fmul
    temp_177 = temp_168 * temp_168;
    // 0x000670: 0x59A4048001770A09 Ffma
    temp_178 = fma(temp_83, temp_155, temp_174);
    temp_179 = clamp(temp_178, 0.0, 1.0);
    // 0x000678: 0x32A008BF00070B0B Ffma
    temp_180 = fma(temp_105, 0.5, 0.5);
    // 0x000688: 0x49A5021805E71704 Ffma
    temp_181 = 0.0 - fp_c6.data[23].z;
    temp_182 = fma(temp_155, temp_181, temp_173);
    temp_183 = clamp(temp_182, 0.0, 1.0);
    // 0x000690: 0x59A2048000E7090E Ffma
    temp_184 = 0.0 - temp_179;
    temp_185 = fma(temp_179, temp_177, temp_184);
    // 0x000698: 0x5C68120000B70B0B Fmul
    temp_186 = temp_180 * 0.5;
    temp_187 = temp_186 * temp_180;
    // 0x0006A8: 0x51A007040097090E Ffma
    temp_188 = fma(temp_179, temp_185, fp_c1.data[2].y);
    // 0x0006B0: 0x59A1068000B70D0D Ffma
    temp_189 = 0.0 - temp_187;
    temp_190 = fma(temp_87, temp_189, temp_87);
    // 0x0006B8: 0x5080000000470E09 Mufu
    temp_191 = 1.0 / temp_188;
    // 0x0006C8: 0x5C58100000D70B0D Fadd
    temp_192 = temp_187 + temp_190;
    // 0x0006D0: 0x5C68100000970606 Fmul
    temp_193 = temp_168 * temp_191;
    // 0x0006D8: 0x4C69101805C70809 Fmul
    temp_194 = 0.0 - fp_c6.data[23].x;
    temp_195 = temp_79 * temp_194;
    // 0x0006E8: 0x5C68100000670606 Fmul
    temp_196 = temp_193 * temp_193;
    // 0x0006F0: 0x49A1049805D70309 Ffma
    temp_197 = 0.0 - fp_c6.data[23].y;
    temp_198 = fma(temp_82, temp_197, temp_195);
    // 0x0006F8: 0x49A5049805E70A11 Ffma
    temp_199 = 0.0 - fp_c6.data[23].z;
    temp_200 = fma(temp_83, temp_199, temp_198);
    temp_201 = clamp(temp_200, 0.0, 1.0);
    // 0x000708: 0x59A1088001170B09 Ffma
    temp_202 = 0.0 - temp_201;
    temp_203 = fma(temp_187, temp_202, temp_201);
    // 0x000710: 0x5C58100000970B0B Fadd
    temp_204 = temp_187 + temp_203;
    // 0x000718: 0x5080000000470D09 Mufu
    temp_205 = 1.0 / temp_192;
    // 0x000728: 0x0103F0000007F00D Mov32i
    // 0x000730: 0x5080000000470B0B Mufu
    temp_206 = 1.0 / temp_204;
    // 0x000738: 0x5C68120000B70909 Fmul
    temp_207 = temp_205 * 0.5;
    temp_208 = temp_207 * temp_206;
    // 0x000748: 0x5C68100000970606 Fmul
    temp_209 = temp_196 * temp_208;
    // 0x000750: 0x49A2090400A70409 Ffma
    temp_210 = fma(temp_183, fp_c1.data[2].z, -6.98316002);
    // 0x000758: 0x49A2090400A71012 Ffma
    temp_211 = fma(temp_176, fp_c1.data[2].z, -6.98316002);
    // 0x000768: 0x5C68100000671106 Fmul
    temp_212 = temp_201 * temp_209;
    // 0x000770: 0x5C68100000970409 Fmul
    temp_213 = temp_183 * temp_210;
    // 0x000778: 0x5C68100001271012 Fmul
    temp_214 = temp_176 * temp_211;
    // 0x000788: 0x5C90008000970013 Rro
    // 0x000790: 0x5080000000271304 Mufu
    temp_215 = exp2(temp_213);
    // 0x000798: 0x49A1021407B70404 Ffma
    temp_216 = 0.0 - fp_c5.data[30].w;
    temp_217 = fma(temp_215, temp_216, temp_215);
    // 0x0007A8: 0x4C58101407B70404 Fadd
    temp_218 = temp_217 + fp_c5.data[30].w;
    // 0x0007B0: 0x4C68101406270404 Fmul
    temp_219 = temp_218 * fp_c5.data[24].z;
    // 0x0007B8: 0x4C68101801570409 Fmul
    temp_220 = temp_219 * fp_c6.data[5].y;
    // 0x0007C8: 0x4C6810180147040B Fmul
    temp_221 = temp_219 * fp_c6.data[5].x;
    // 0x0007D0: 0x4C68101801670410 Fmul
    temp_222 = temp_219 * fp_c6.data[5].z;
    // 0x0007D8: 0x5C68100000970604 Fmul
    temp_223 = temp_212 * temp_220;
    // 0x0007E8: 0x5C62578000870309 Fmnmx
    temp_224 = abs(temp_82);
    temp_225 = abs(temp_79);
    temp_226 = max(temp_224, temp_225);
    // 0x0007F0: 0x5C68100000B7060E Fmul
    temp_227 = temp_212 * temp_221;
    // 0x0007F8: 0xE003FF874FF7FF0B Ipa
    temp_228 = gl_FragCoord.y;
    temp_229 = support_buffer.render_scale[0];
    temp_230 = temp_228 / temp_229;
    // 0x000808: 0x5C68100001070610 Fmul
    temp_231 = temp_212 * temp_222;
    // 0x000810: 0x4C68101808570706 Fmul
    temp_232 = temp_160 * fp_c6.data[33].y;
    // 0x000818: 0x32A006BF00070307 Ffma
    temp_233 = fma(temp_82, 0.5, 0.5);
    // 0x000828: 0xE043FF8D40F7FF0D Ipa
    temp_234 = in_attr5.y;
    // 0x000830: 0x5C60578000970A13 Fmnmx
    temp_235 = abs(temp_83);
    temp_236 = max(temp_235, temp_226);
    // 0x000838: 0x49A0060400B70E0E Ffma
    temp_237 = fma(temp_227, fp_c1.data[2].w, temp_169);
    // 0x000848: 0xE043FF8D00F7FF0C Ipa
    temp_238 = in_attr5.x;
    // 0x000850: 0x49A0028400B71010 Ffma
    temp_239 = fma(temp_231, fp_c1.data[2].w, temp_170);
    // 0x000858: 0x5080000000471309 Mufu
    temp_240 = 1.0 / temp_236;
    // 0x000868: 0x4C98079C02070013 Mov
    // 0x000870: 0xE043FF9040F7FF05 Ipa
    temp_241 = in_attr8.y;
    // 0x000878: 0x5C68100000970808 Fmul
    temp_242 = temp_79 * temp_240;
    // 0x000888: 0x5C69100000970A0A Fmul
    temp_243 = 0.0 - temp_240;
    temp_244 = temp_83 * temp_243;
    // 0x000890: 0x5C68100000970309 Fmul
    temp_245 = temp_82 * temp_240;
    // 0x000898: 0x49A0030400B70403 Ffma
    temp_246 = fma(temp_223, fp_c1.data[2].w, temp_232);
    // 0x0008A8: 0xE043FF9000F7FF04 Ipa
    temp_247 = in_attr8.x;
    // 0x0008B0: 0xC0BA0163EFF70808 Tex
    temp_248 = textureLod(fp_t_tcb_16, vec3(temp_242, temp_245, temp_244), 0.0).xyz;
    temp_249 = temp_248.x;
    temp_250 = temp_248.y;
    temp_251 = temp_248.z;
    // 0x0008B8: 0xD822030FF0071500 Texs
    temp_252 = texture(fp_t_tcb_30, vec2(temp_0, temp_1)).x;
    // 0x0008C8: 0xD822036FF0270101 Texs
    temp_253 = texture(fp_t_tcb_36, vec2(temp_2, temp_3)).x;
    // 0x0008D0: 0xE043FF9080F7FF06 Ipa
    temp_254 = in_attr8.z;
    // 0x0008D8: 0x4C68100C04B70B0B Fmul
    temp_255 = temp_230 * fp_c3.data[18].w;
    // 0x0008E8: 0xD822024020D70C0C Texs
    temp_256 = texture(fp_t_tcb_24, vec2(temp_238, temp_234)).xyz;
    temp_257 = temp_256.x;
    temp_258 = temp_256.y;
    temp_259 = temp_256.z;
    // 0x0008F0: 0xDEBA0000C1370404 TexB
    temp_260 = texture(fp_t_cb7_20, vec3(temp_247, temp_241, temp_254)).x;
    // 0x0008F8: 0xD8220200B0B71416 Texs
    temp_261 = texture(fp_t_tcb_20, vec2(temp_159, temp_255)).xyz;
    temp_262 = temp_261.x;
    temp_263 = temp_261.y;
    temp_264 = temp_261.z;
    // 0x000908: 0x5C90008001270012 Rro
    // 0x000910: 0x4C98079800870014 Mov
    // 0x000918: 0x5080000000271205 Mufu
    temp_265 = exp2(temp_214);
    // 0x000928: 0x4C98079800A70006 Mov
    // 0x000930: 0x4C59101800471414 Fadd
    temp_266 = 0.0 - fp_c6.data[2].x;
    temp_267 = temp_266 + fp_c6.data[1].x;
    // 0x000938: 0x4C59101800670606 Fadd
    temp_268 = 0.0 - fp_c6.data[2].z;
    temp_269 = temp_268 + fp_c6.data[1].z;
    // 0x000948: 0x51A0039800871415 Ffma
    temp_270 = fma(temp_267, temp_233, fp_c6.data[2].x);
    // 0x000950: 0x4C98079800970014 Mov
    // 0x000958: 0x4C59101800571414 Fadd
    temp_271 = 0.0 - fp_c6.data[2].y;
    temp_272 = temp_271 + fp_c6.data[1].y;
    // 0x000968: 0xF0F0000034270000 Depbar
    // 0x000970: 0x49A0040400C71508 Ffma
    temp_273 = fma(temp_270, fp_c1.data[3].x, temp_249);
    // 0x000978: 0x51A0039800971415 Ffma
    temp_274 = fma(temp_272, temp_233, fp_c6.data[2].y);
    // 0x000988: 0x51A0039800A70607 Ffma
    temp_275 = fma(temp_269, temp_233, fp_c6.data[2].z);
    // 0x000990: 0x49A1029407B70506 Ffma
    temp_276 = 0.0 - fp_c5.data[30].w;
    temp_277 = fma(temp_265, temp_276, temp_265);
    // 0x000998: 0x49A0048400C71509 Ffma
    temp_278 = fma(temp_274, fp_c1.data[3].x, temp_250);
    // 0x0009A8: 0x49A0050400C70705 Ffma
    temp_279 = fma(temp_275, fp_c1.data[3].x, temp_251);
    // 0x0009B0: 0x4C58101407B70606 Fadd
    temp_280 = temp_277 + fp_c5.data[30].w;
    // 0x0009B8: 0x4C68101801471107 Fmul
    temp_281 = temp_201 * fp_c6.data[5].x;
    // 0x0009C8: 0xF0F0000034170000 Depbar
    // 0x0009D0: 0x4C68101402C70C0C Fmul
    temp_282 = temp_257 * fp_c5.data[11].x;
    // 0x0009D8: 0x4C68101406270606 Fmul
    temp_283 = temp_280 * fp_c5.data[24].z;
    // 0x0009E8: 0x1E23EA2F98370707 Fmul32i
    temp_284 = temp_281 * 0.318309873;
    // 0x0009F0: 0x59A1038000770607 Ffma
    temp_285 = 0.0 - temp_284;
    temp_286 = fma(temp_283, temp_285, temp_284);
    // 0x0009F8: 0x5C58100000770807 Fadd
    temp_287 = temp_273 + temp_286;
    // 0x000A08: 0x4C68101801571108 Fmul
    temp_288 = temp_201 * fp_c6.data[5].y;
    // 0x000A10: 0x4C68101801671111 Fmul
    temp_289 = temp_201 * fp_c6.data[5].z;
    // 0x000A18: 0x59A0070000770C0E Ffma
    temp_290 = fma(temp_282, temp_287, temp_237);
    // 0x000A28: 0x1E23EA2F98370808 Fmul32i
    temp_291 = temp_288 * 0.318309873;
    // 0x000A30: 0x1E23EA2F98371111 Fmul32i
    temp_292 = temp_289 * 0.318309873;
    // 0x000A38: 0x4C98079403570007 Mov
    // 0x000A48: 0x385C103F80070C0C Fadd
    temp_293 = temp_282 + 1.0;
    temp_294 = clamp(temp_293, 0.0, 1.0);
    // 0x000A50: 0x59A104000087060A Ffma
    temp_295 = 0.0 - temp_291;
    temp_296 = fma(temp_283, temp_295, temp_291);
    // 0x000A58: 0x59A1088001170612 Ffma
    temp_297 = 0.0 - temp_292;
    temp_298 = fma(temp_283, temp_297, temp_292);
    // 0x000A68: 0x5C68100000170008 Fmul
    temp_299 = temp_252 * temp_253;
    // 0x000A70: 0x0103F8000007F006 Mov32i
    // 0x000A78: 0x4C68101402D70D00 Fmul
    temp_300 = temp_258 * fp_c5.data[11].y;
    // 0x000A88: 0x5C68100000E70C0E Fmul
    temp_301 = temp_294 * temp_290;
    // 0x000A90: 0x5C58100000A70901 Fadd
    temp_302 = temp_278 + temp_296;
    // 0x000A98: 0x4C9807940347000A Mov
    // 0x000AA8: 0x5C58100001270505 Fadd
    temp_303 = temp_279 + temp_298;
    // 0x000AB0: 0x32A2034000070809 Ffma
    temp_304 = fma(temp_299, 2.0, -1.0);
    // 0x000AB8: 0x32A6034000070808 Ffma
    temp_305 = fma(temp_299, 2.0, -1.0);
    temp_306 = clamp(temp_305, 0.0, 1.0);
    // 0x000AC8: 0x4C68101402E70206 Fmul
    temp_307 = temp_259 * fp_c5.data[11].z;
    // 0x000AD0: 0xE043FF8F00F7FF02 Ipa
    temp_308 = in_attr7.x;
    // 0x000AD8: 0x59A0018000170001 Ffma
    temp_309 = fma(temp_300, temp_302, temp_246);
    // 0x000AE8: 0x4C98079403670003 Mov
    // 0x000AF0: 0x010404000007F011 Mov32i
    // 0x000AF8: 0x5C5970000FF70909 Fadd
    temp_310 = abs(temp_304);
    temp_311 = 0.0 - temp_310;
    temp_312 = temp_311 + -0.0;
    // 0x000B08: 0x59A0080000570605 Ffma
    temp_313 = fma(temp_307, temp_303, temp_239);
    // 0x000B10: 0x385C103F80070606 Fadd
    temp_314 = temp_307 + 1.0;
    temp_315 = clamp(temp_314, 0.0, 1.0);
    // 0x000B18: 0x51A005140347090A Ffma
    temp_316 = fma(temp_312, fp_c5.data[13].x, fp_c5.data[13].x);
    // 0x000B28: 0x51A0039403570907 Ffma
    temp_317 = fma(temp_312, fp_c5.data[13].y, fp_c5.data[13].y);
    // 0x000B30: 0x51A0019403670909 Ffma
    temp_318 = fma(temp_312, fp_c5.data[13].z, fp_c5.data[13].z);
    // 0x000B38: 0xE04BFF8F40F7FF03 Ipa
    temp_319 = in_attr7.y;
    temp_320 = clamp(temp_319, 0.0, 1.0);
    // 0x000B48: 0x5C68100000570605 Fmul
    temp_321 = temp_315 * temp_313;
    // 0x000B50: 0xE043FF8C80F7FF0F Ipa
    temp_322 = in_attr4.z;
    // 0x000B58: 0x49A0039403170812 Ffma
    temp_323 = fma(temp_306, fp_c5.data[12].y, temp_317);
    // 0x000B68: 0x4C98079406B70007 Mov
    // 0x000B70: 0x49A0051403070810 Ffma
    temp_324 = fma(temp_306, fp_c5.data[12].x, temp_316);
    // 0x000B78: 0x49A0049403270813 Ffma
    temp_325 = fma(temp_306, fp_c5.data[12].z, temp_318);
    // 0x000B88: 0x385C103F8007000A Fadd
    temp_326 = temp_300 + 1.0;
    temp_327 = clamp(temp_326, 0.0, 1.0);
    // 0x000B90: 0x4C9807980B470009 Mov
    // 0x000B98: 0x5C68100001270D12 Fmul
    temp_328 = temp_258 * temp_323;
    // 0x000BA8: 0x4C68101809D7070C Fmul
    temp_329 = fp_c5.data[26].w * fp_c6.data[39].y;
    // 0x000BB0: 0x5C68100001070D00 Fmul
    temp_330 = temp_258 * temp_324;
    // 0x000BB8: 0x5C68100001370D08 Fmul
    temp_331 = temp_258 * temp_325;
    // 0x000BC8: 0x4C68101809C7070D Fmul
    temp_332 = fp_c5.data[26].w * fp_c6.data[39].x;
    // 0x000BD0: 0x4C68101809E70707 Fmul
    temp_333 = fp_c5.data[26].w * fp_c6.data[39].z;
    // 0x000BD8: 0x5C68100000170A01 Fmul
    temp_334 = temp_327 * temp_309;
    // 0x000BE8: 0x5C68100001270C0C Fmul
    temp_335 = temp_329 * temp_328;
    // 0x000BF0: 0x4C98079802970006 Mov
    // 0x000BF8: 0x51A204980B471717 Ffma
    temp_336 = 0.0 - fp_c6.data[45].x;
    temp_337 = fma(temp_263, fp_c6.data[45].x, temp_336);
    // 0x000C08: 0x49A501180BC7040A Ffma
    temp_338 = 0.0 - fp_c6.data[47].x;
    temp_339 = fma(temp_260, temp_338, temp_308);
    temp_340 = clamp(temp_339, 0.0, 1.0);
    // 0x000C10: 0x5C68100000870708 Fmul
    temp_341 = temp_333 * temp_331;
    // 0x000C18: 0x5080000000370A0A Mufu
    temp_342 = log2(temp_340);
    // 0x000C28: 0x49A0009406C70C01 Ffma
    temp_343 = fma(temp_335, fp_c5.data[27].x, temp_334);
    // 0x000C30: 0x51A204980B471616 Ffma
    temp_344 = 0.0 - fp_c6.data[45].x;
    temp_345 = fma(temp_262, fp_c6.data[45].x, temp_344);
    // 0x000C38: 0x51A0031802971704 Ffma
    temp_346 = fma(temp_337, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x000C48: 0x51A204980B470B0B Ffma
    temp_347 = 0.0 - fp_c6.data[45].x;
    temp_348 = fma(temp_264, fp_c6.data[45].x, temp_347);
    // 0x000C50: 0x33A008C000070311 Ffma
    temp_349 = fma(temp_320, -2.0, 3.0);
    // 0x000C58: 0x5C68100000070D00 Fmul
    temp_350 = temp_332 * temp_330;
    // 0x000C68: 0x4C98079802870007 Mov
    // 0x000C70: 0x4C98079802A70009 Mov
    // 0x000C78: 0x5C68100000370303 Fmul
    temp_351 = temp_320 * temp_320;
    // 0x000C88: 0x5C58300000470106 Fadd
    temp_352 = 0.0 - temp_346;
    temp_353 = temp_343 + temp_352;
    // 0x000C90: 0x49A0029406C70802 Ffma
    temp_354 = fma(temp_341, fp_c5.data[27].x, temp_321);
    // 0x000C98: 0x49A0071406C70000 Ffma
    temp_355 = fma(temp_350, fp_c5.data[27].x, temp_301);
    // 0x000CA8: 0x51A0039802871616 Ffma
    temp_356 = fma(temp_345, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x000CB0: 0x51A0049802A70B0B Ffma
    temp_357 = fma(temp_348, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x000CB8: 0x5C68100000371103 Fmul
    temp_358 = temp_349 * temp_351;
    // 0x000CC8: 0x4C68101803170A08 Fmul
    temp_359 = temp_342 * fp_c6.data[12].y;
    // 0x000CD0: 0x49A002180BF70607 Ffma
    temp_360 = fma(temp_353, fp_c6.data[47].w, temp_346);
    // 0x000CD8: 0x5C58300001670005 Fadd
    temp_361 = 0.0 - temp_356;
    temp_362 = temp_355 + temp_361;
    // 0x000CE8: 0x5C58300000B70206 Fadd
    temp_363 = 0.0 - temp_357;
    temp_364 = temp_354 + temp_363;
    // 0x000CF0: 0x4C68101803770303 Fmul
    temp_365 = temp_358 * fp_c6.data[13].w;
    // 0x000CF8: 0x5C90008000870009 Rro
    // 0x000D08: 0x5080000000270909 Mufu
    temp_366 = exp2(temp_359);
    // 0x000D10: 0x49A00B180BF70505 Ffma
    temp_367 = fma(temp_362, fp_c6.data[47].w, temp_356);
    // 0x000D18: 0x49A005980BF70606 Ffma
    temp_368 = fma(temp_364, fp_c6.data[47].w, temp_357);
    // 0x000D28: 0x49A2019803570308 Ffma
    temp_369 = 0.0 - temp_365;
    temp_370 = fma(temp_365, fp_c6.data[13].y, temp_369);
    // 0x000D30: 0x5C60178000770407 Fmnmx
    temp_371 = max(temp_346, temp_360);
    // 0x000D38: 0x49A2019803470304 Ffma
    temp_372 = 0.0 - temp_365;
    temp_373 = fma(temp_365, fp_c6.data[13].x, temp_372);
    // 0x000D48: 0x49A2019803670303 Ffma
    temp_374 = 0.0 - temp_365;
    temp_375 = fma(temp_365, fp_c6.data[13].z, temp_374);
    // 0x000D50: 0x5C60178000571605 Fmnmx
    temp_376 = max(temp_356, temp_367);
    // 0x000D58: 0x5C60178000670B06 Fmnmx
    temp_377 = max(temp_357, temp_368);
    // 0x000D68: 0x59A0038000870708 Ffma
    temp_378 = fma(temp_371, temp_370, temp_371);
    // 0x000D70: 0x59A0028000470505 Ffma
    temp_379 = fma(temp_376, temp_373, temp_376);
    // 0x000D78: 0x59A0030000370607 Ffma
    temp_380 = fma(temp_377, temp_375, temp_377);
    // 0x000D88: 0x4C68101802B70906 Fmul
    temp_381 = temp_366 * fp_c6.data[10].w;
    // 0x000D90: 0x5C59100000870104 Fadd
    temp_382 = 0.0 - temp_343;
    temp_383 = temp_382 + temp_378;
    // 0x000D98: 0x5C59100000570003 Fadd
    temp_384 = 0.0 - temp_355;
    temp_385 = temp_384 + temp_379;
    // 0x000DA8: 0x5C59100000770205 Fadd
    temp_386 = 0.0 - temp_354;
    temp_387 = temp_386 + temp_380;
    // 0x000DB0: 0x0103F8000007F007 Mov32i
    // 0x000DB8: 0x59A0008000670401 Ffma
    temp_388 = fma(temp_383, temp_381, temp_343);
    // 0x000DC8: 0x4C58100C03870F04 Fadd
    temp_389 = temp_322 + fp_c3.data[14].x;
    // 0x000DD0: 0x59A0000000670300 Ffma
    temp_390 = fma(temp_385, temp_381, temp_355);
    // 0x000DD8: 0x0103F8000007F003 Mov32i
    // 0x000DE8: 0x59A0010000670502 Ffma
    temp_391 = fma(temp_387, temp_381, temp_354);
    // 0x000DF0: 0x0103F6000007F005 Mov32i
    // 0x000DF8: 0x5C9807800FF70006 Mov
    // 0x000E08: 0x49A37F8C03C70404 Ffma
    temp_392 = 0.0 - fp_c3.data[15].x;
    temp_393 = fma(temp_389, temp_392, -0.0);
    // 0x000E10: 0xE30000000007000F Exit
    out_attr0.x = temp_390;
    out_attr0.y = temp_388;
    out_attr0.z = temp_391;
    out_attr0.w = 1.0;
    out_attr1.x = temp_393;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
